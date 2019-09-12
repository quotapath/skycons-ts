"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../constants");
function leaf(ctx, time, x, y, cw, stroke, color) {
    var a = cw / 8;
    var b = a / 3;
    var c = 2 * b;
    var d = (time % 1) * constants_1.TAU;
    var e = Math.cos(d);
    var f = Math.sin(d);
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = stroke;
    ctx.beginPath();
    ctx.arc(x, y, a, d, d + Math.PI, false);
    ctx.arc(x - b * e, y - b * f, c, d + Math.PI, d, false);
    ctx.arc(x + c * e, y + c * f, b, d + Math.PI, d, true);
    ctx.globalCompositeOperation = "destination-out";
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    ctx.stroke();
}
exports.leaf = leaf;
