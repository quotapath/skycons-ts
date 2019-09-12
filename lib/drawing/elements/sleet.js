"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var line_1 = require("./line");
function sleet(ctx, time, gapleft, gapTop, circleWidth, stroke, color) {
    time /= 750;
    ctx.strokeStyle = color;
    ctx.lineWidth = stroke * 0.5;
    var gapBetween = circleWidth * 0.1875;
    for (var i = 0; i < 4; ++i) {
        var percentage = (time + i / 4) % 1;
        var x = Math.floor(gapleft + ((i - 1.5) / 1.5) * (i === 1 || i === 2 ? -1 : 1) * gapBetween) + 0.5;
        var y = gapTop + percentage * circleWidth;
        line_1.line(ctx, x, y - stroke * 1.5, x, y + stroke * 1.5);
    }
}
exports.sleet = sleet;
