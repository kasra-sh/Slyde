import {debounce} from "xeer-js/core/functions";
import {$, $$} from "xeer-js/dom/query";
import {addClass} from "xeer-js/dom/classes";
import {style} from "xeer-js/dom/styles";
import {ForEach, item, Max, Min, MinIndex} from "xeer-js/core/stream";
import {setEvent} from "xeer-js/dom/event";

var singleValueStyleRegex = /^(^-?\d*(?:\.\d+)?)(.*)$/;

function parseSingleValueStyle(str) {
    var v = singleValueStyleRegex.exec(str);
    return {
        value: parseFloat(v[1]) || "",
        unit: v[2] || ""
    }
}

function mathAbs(n) {
    return n >= 0 ? n : -n;
}

function Slyde(container, {sticky=false, rtl=false, verticalScroll=false, onchange, onchanging}) {
    var self = this;
    self._cnt = $$(container)[0];
    self._sld = $$(".slyde-wrapper", self._cnt)[0];
    self.leftArrow = $$(".slyde-left-arrow", self._cnt)[0];
    self.rightArrow = $$(".slyde-right-arrow", self._cnt)[0];
    self.isdown = false;
    self.transX = 0;
    self.lastPointerX = self._cnt.pageX;
    self.lastPointerY = self._cnt.pageY;
    self.lastDif = null;
    self.moves = 0;
    self.items = [];
    self.sticky = sticky;
    self.osThresh = 0.2;
    self.osThreshCI = 0.52;
    self._rtl = rtl;
    if (self._rtl) {
        addClass(self._cnt, 'slyde-rtl')
    }
    self._vertScroll = verticalScroll;
    self.stopped = false;

    self.onchange = onchange
    self.onchanging = onchanging;

    self._debounceChange = debounce((s, c, v)=>{
        self.onchange && self.onchange(s,c,v);
    }, 200);


    self.minOf = function (a, b) {
        return a < b ? a : b
    };

    self.maxOf = function (a, b) {
        return a > b ? a : b
    };

    self._limit = function (v, a, b) {
        var mi = self.minOf(a, b);
        var ma = self.maxOf(a, b);
        if (v <= mi) return mi
        if (v >= ma) return ma
        return v
    };

    self._itemL = function (i) {
        return i.offsetLeft;
    }

    self._itemW = function (i) {
        return i.offsetWidth
    }

    self._scrollW = function () {
        var sw = 0;
        ForEach(self.items, function (i) {
            sw += self._itemW(i)
        });
        return sw
    }

    self._calcHeight = function () {
        return Max(self.items, function (i) {
            return i.offsetHeight
        }).clientHeight;
    }

    self._thr = function () {
        return self.sticky ? self.osThreshCI : self.osThresh
    }

    self._leftLimit = function (thr) {
        thr = thr || self._thr();
        return self._cnt.offsetWidth * (thr);
    }

    self._rightLimit = function (thr) {
        thr = thr || self._thr();
        return (self._sld.offsetWidth - self._cnt.offsetWidth * ((1 - thr)))
    }

    self._slideTo = function (x, upd) {
        style(self._sld, "left", x + "px");
        upd && self._update();
    }

    self._debounceStick = debounce(() => {
        try {
            self.isdown = false;
            style(self._sld, "transition", "all 0.2s ease-out");
            self.transX = self.itemX(self.centerItemIndex());
            self._slideTo(self.transX);
        } catch (e) {
            console.error(self.centerItemIndex());
        }
    }, 100)
    // self._sxt;
    self._slideX = function (x, sticky, time, limit) {
        if (limit === undefined) limit = true;
        time = time || 0.4;
        style(self._sld, "transition", "all " + (time / 2).toPrecision(4) + "s ease-out");
        self.transX += x;
        if (limit)
            self.transX = self._limit(self.transX, self._leftLimit(), -self._rightLimit());
        if (sticky) {
            self.isdown = true;
            self._debounceStick()
        }
        self._slideTo(self.transX, sticky);
        self._update(true);

    }

    self.bounce = function (dir, sticky, limit) {
        sticky = sticky || true;
        dir = dir || 1;
        var minW = Min(self.items, function (i) {
            return i.offsetWidth
        }).offsetWidth;

        var maxW = Max(self.items, function (i) {
            return i.offsetWidth
        }).offsetWidth;

        self._slideX(dir * (maxW + minW) / 2, sticky, undefined, limit);
    }

    self.slideToIndex = function (i) {
        self._slideX(self.itemX(i) - self.transX, undefined, undefined, false);
    }

    self._start = function (e, el) {
        if (e.touches && e.touches.length > 1) return;
        self.isdown = true;
        self.lastPointerX = e.pageX || e.touches[0].pageX;
        style(el, "transition", "none");
    };

    self._move = function (e, el) {
        if (self.stopped) {
            return;
        }
        if (!self.isdown) return;
        if (e.touches && e.touches.length > 1) return;
        var pageX = e.pageX || e.changedTouches[0].pageX;
        var dif = pageX - self.lastPointerX;
        var pageY = e.pageY || e.changedTouches[0].pageY;
        var difY = pageY - self.lastPointerY;
        if (!self._vertScroll && mathAbs(difY) > 0) {
            return;
        }
        if (dif !== 0) {
            self.transX += dif;
            self.lastPointerX = pageX;
            self.lastDif = dif * 1.2;
            self.transX = self._limit(self.transX, self._leftLimit(), -self._rightLimit())
            self._slideTo(self.transX);
        }
    };

    self._finish = function (e, el) {
        if (!self.isdown) return;
        self.isdown = false;
        var time = 0;
        time = ((mathAbs(self.lastDif)) / 50).toPrecision(3);
        time = self._limit(time, 0.3, 0.5);
        self._slideX(self.lastDif * 10, self.sticky, time);
        self.lastDif = 0;
    };

    self._debounceBounce = debounce((dif) => {
        self.isdown = false;
        self.bounce(dif > 0 ? 0.6 : -0.6, self.sticky);
        self._update();
    }, 50)
    self._wheel = function (e, el) {
        if (e.deltaY) {
            if (!self._vertScroll) return;
            e.preventDefault();
        }
        var rtl = self._rtl ? 1 : -1;
        var dif = (e.deltaX) || (e.deltaY * rtl);
        self.isdown = true;
        self._debounceBounce(dif)
    };

    self.setHeight = function (h) {
        style(self._sld, "height", h + "px");
        style(self._cnt, "height", h * 1.005 + "px");
    }

    self._updateHeight = function () {
        var sbh = self._calcHeight() + (parseSingleValueStyle(style(self._sld, "border-bottom")).value * 2);
        self.setHeight(sbh);
    }

    self._addItem = function (item) {
        self.items.push(item)
    }

    self._assignEventHandlers = function () {
        setEvent(self._sld, ["mousedown", "touchstart"], self._start);

        setEvent(self._sld, ["mousemove", "touchmove"], self._move);

        setEvent(self._sld, ["mouseleave", "mouseup", "touchend"], self._finish);

        setEvent(self._sld, "wheel", self._wheel);

        self.leftArrow && setEvent(self.leftArrow, "click", function () {
            self.bounce(1);
        });

        self.rightArrow && setEvent(self.rightArrow, "click", function () {
            self.bounce(-1);
        });
    }

    self._setup = function () {
        $(".slyde-item", self._sld).forEach(function (i) {
            self._addItem(i);
        });
        self._assignEventHandlers();
        self.transX = self.itemX(0);
        self._slideTo(self.transX);

        self._updateHeight();
    }


    self._update = function () {
        var vi = [];
        var cw = self._cnt.offsetWidth;
        var tx = self.transX;
        var xl = -tx;
        var xr = -tx + cw;
        self.items.forEach(function (i, idx) {
            var iw = i.offsetWidth;
            var il = i.offsetLeft;
            var ir = il + iw;
            if ((il < xr && ir > xl)) {
                vi.push(idx);
            }
        });

        self.onchanging && self.onchanging(self, self.centerItemIndex(), vi);

        self._debounceChange(self, self.centerItemIndex(), vi)
    }

    self.start = function () {
        self.stopped = false;
        self._update();
    }
    self.stop = function () {
        self.stopped = true;
    }

    self.itemX = function (i) {
        let it = item(self.items, i);
        return -it.offsetLeft + (self._cnt.offsetWidth / 2 - it.offsetWidth / 2);
    }
    self.itemXitem = function (i) {
        return -i.offsetLeft + (self._cnt.offsetWidth / 2 - i.offsetWidth / 2);
    }
    self.itemAbsDistance = function (idx) {
        return mathAbs(self.itemX(idx) - self.transX)
    }
    self.centerItemIndex = function (debug=false) {
        return MinIndex(self.items, function (i, idx) {
            return self.itemAbsDistance(idx)
        }, debug);
    }

    self.stop = function () {
        clearInterval(self.interval)
    }

    self._setup();

}

global.Slyde = Slyde;