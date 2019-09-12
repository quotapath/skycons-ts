"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function thunderbolts(ctx, time, cx, cy, cw, color) {
    time /= 1000;
    var alpha = 1 - (time % 1);
    var a = cw / 25;
    var b = Math.floor(time % 4);
    var x = cx + ((b - 1.5) / 1.5) * (b === 1 || b === 2 ? -1 : 1) * cw * 0.16;
    var y = cy;
    ctx.fillStyle = color;
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    ctx.moveTo(x - a, y - a * 5);
    ctx.lineTo(x - a * 3, y);
    ctx.lineTo(x, y);
    ctx.lineTo(x - a * 2, y + a * 5);
    ctx.lineTo(x + a * 3, y - a);
    ctx.lineTo(x, y - a);
    ctx.lineTo(x + a * 2, y - a * 5);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1;
}
exports.thunderbolts = thunderbolts;
