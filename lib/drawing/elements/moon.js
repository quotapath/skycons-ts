"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../constants");
function moon(ctx, time, cx, cy, cw, stroke, color) {
    time /= 15000;
    var a = cw * 0.29 - stroke * 0.5;
    var b = cw * 0.05;
    var c = Math.cos(time * constants_1.TAU);
    var p = (c * constants_1.TAU) / -16;
    ctx.strokeStyle = color;
    ctx.lineWidth = stroke;
    cx += c * b;
    ctx.beginPath();
    ctx.arc(cx, cy, a, p + constants_1.TAU / 8, p + (constants_1.TAU * 7) / 8, false);
    ctx.arc(cx + Math.cos(p) * a * constants_1.TWO_OVER_SQRT_2, cy + Math.sin(p) * a * constants_1.TWO_OVER_SQRT_2, a, p + (constants_1.TAU * 5) / 8, p + (constants_1.TAU * 3) / 8, true);
    ctx.closePath();
    ctx.stroke();
}
exports.moon = moon;
