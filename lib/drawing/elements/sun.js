"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../constants");
var line_1 = require("./line");
function sun(ctx, time, circleX, circleY, circleWidth, stroke, color) {
    time /= 120000;
    ctx.strokeStyle = color;
    ctx.lineWidth = stroke;
    var radius = circleWidth * 0.25 - stroke * 0.5;
    ctx.beginPath();
    ctx.arc(circleX, circleY, radius, 0, constants_1.TAU, false);
    ctx.stroke();
    var innerRadius = circleWidth * 0.32 + stroke * 0.5;
    var outerRadius = circleWidth * 0.5 - stroke * 0.5;
    for (var i = 0; i < 8; ++i) {
        var p = (time + i / 8) * constants_1.TAU;
        var cos = Math.cos(p);
        var sin = Math.sin(p);
        line_1.line(ctx, circleX + cos * innerRadius, circleY + sin * innerRadius, circleX + cos * outerRadius, circleY + sin * outerRadius);
    }
}
exports.sun = sun;
