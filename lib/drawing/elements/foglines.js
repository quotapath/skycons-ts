"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../constants");
var line_1 = require("./line");
function foglines(ctx, time, cw, ch, s, k, color) {
    time /= 5000;
    var a = Math.cos(time * constants_1.TAU) * s * 0.02;
    var b = Math.cos((time + 0.25) * constants_1.TAU) * s * 0.02;
    var c = Math.cos((time + 0.5) * constants_1.TAU) * s * 0.02;
    var d = Math.cos((time + 0.75) * constants_1.TAU) * s * 0.02;
    var n = ch * 0.936;
    var e = Math.floor(n - k * 0.5) + 0.5;
    var f = Math.floor(n - k * 2.5) + 0.5;
    ctx.strokeStyle = color;
    ctx.lineWidth = k;
    line_1.line(ctx, a + cw * 0.2 + k * 0.5, e, b + cw * 0.8 - k * 0.5, e);
    line_1.line(ctx, c + cw * 0.2 + k * 0.5, f, d + cw * 0.8 - k * 0.5, f);
}
exports.foglines = foglines;
