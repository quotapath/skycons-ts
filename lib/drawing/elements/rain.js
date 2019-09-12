"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../constants");
function rain(ctx, time, cx, cy, cw, stroke, color) {
    time /= 1350;
    var a = cw * 0.16;
    var b = (constants_1.TAU * 11) / 12;
    var c = (constants_1.TAU * 7) / 12;
    var i;
    var p;
    var x;
    var y;
    ctx.fillStyle = color;
    for (i = 4; i--;) {
        p = (time + i / 4) % 1;
        x = cx + ((i - 1.5) / 1.5) * (i === 1 || i === 2 ? -1 : 1) * a;
        y = cy + p * p * cw;
        ctx.beginPath();
        ctx.moveTo(x, y - stroke * 1.5);
        ctx.arc(x, y, stroke * 0.75, b, c, false);
        ctx.fill();
    }
}
exports.rain = rain;
