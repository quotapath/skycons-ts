"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = require("../../colors");
var constants_1 = require("../../constants");
var swoosh_1 = require("../elements/swoosh");
function iconWind(ctx, time) {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    var shorter = Math.min(width, height);
    swoosh_1.swoosh(ctx, time, width * 0.5, height * 0.5, shorter, shorter * constants_1.STROKE, 0, 2, colors_1.colors.wind, colors_1.colors.leaf);
    swoosh_1.swoosh(ctx, time, width * 0.5, height * 0.5, shorter, shorter * constants_1.STROKE, 1, 2, colors_1.colors.wind, colors_1.colors.leaf);
}
exports.iconWind = iconWind;
