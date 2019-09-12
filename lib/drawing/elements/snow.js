"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../constants");
var line_1 = require("./line");
function snow(ctx, time, gapLeft, gapTop, maxGapBetween, stroke, color) {
    time /= 3000;
    var a = maxGapBetween * 0.16;
    var lineLength = stroke * 0.75;
    var angle1 = time * constants_1.TAU * 0.7;
    var line1X = Math.cos(angle1) * lineLength;
    var line1Y = Math.sin(angle1) * lineLength;
    var angle2 = angle1 + constants_1.TAU / 3;
    var line2X = Math.cos(angle2) * lineLength;
    var line2Y = Math.sin(angle2) * lineLength;
    var angle3 = angle1 + (constants_1.TAU * 2) / 3;
    var line3X = Math.cos(angle3) * lineLength;
    var line3Y = Math.sin(angle3) * lineLength;
    ctx.strokeStyle = color;
    ctx.lineWidth = stroke * 0.5;
    for (var i = 0; i < 4; ++i) {
        var percentage = (time + i / 4) % 1;
        var x = gapLeft + Math.sin((percentage + i / 4) * constants_1.TAU) * a;
        var y = gapTop + percentage * maxGapBetween;
        line_1.line(ctx, x - line1X, y - line1Y, x + line1X, y + line1Y);
        line_1.line(ctx, x - line2X, y - line2Y, x + line2X, y + line2Y);
        line_1.line(ctx, x - line3X, y - line3Y, x + line3X, y + line3Y);
    }
}
exports.snow = snow;
