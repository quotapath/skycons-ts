"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var puffs_1 = require("./puffs");
function fogbank(ctx, time, cx, cy, cw, stroke, color) {
    time /= 30000;
    var a = cw * 0.21;
    var b = cw * 0.06;
    var c = cw * 0.21;
    var d = cw * 0.28;
    ctx.fillStyle = color;
    puffs_1.puffs(ctx, time, cx, cy, a, b, c, d);
    ctx.globalCompositeOperation = "destination-out";
    puffs_1.puffs(ctx, time, cx, cy, a, b, c - stroke, d - stroke);
    ctx.globalCompositeOperation = "source-over";
}
exports.fogbank = fogbank;
