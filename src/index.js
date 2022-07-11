"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.useMotor = void 0;
var hooks_1 = require("preact/hooks");
var mod_ts_1 = require("https://deno.land/x/motor/mod.ts");
function useMotor(machine) {
    var _a = (0, hooks_1.useState)((0, mod_ts_1.motor)(machine)), _b = _a[0], fire = _b.fire, gear = _b.gear, hook = _b.hook, setShifter = _a[1];
    var _c = (0, hooks_1.useState)([""]), fired = _c[0], setFired = _c[1];
    hook(function (e) {
        setFired(__spreadArray(__spreadArray([], fired, true), [e], false));
    });
    (0, hooks_1.useEffect)(function () {
        var shift = (0, mod_ts_1.motor)(machine);
        setShifter(shift);
        fired.forEach(function (e) { return shift.fire(e); });
    }, [fired]);
    return {
        fire: fire,
        gear: gear,
        hook: hook
    };
}
exports.useMotor = useMotor;
