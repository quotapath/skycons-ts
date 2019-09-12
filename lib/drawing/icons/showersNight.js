"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = require("../../colors");
var constants_1 = require("../../constants");
var cloud_1 = require("../elements/cloud");
var moon_1 = require("../elements/moon");
var rain_1 = require("../elements/rain");
function iconShowersNight(ctx, time) {
    var w = ctx.canvas.width;
    var h = ctx.canvas.height;
    var s = Math.min(w, h);
    moon_1.moon(ctx, time, w * 0.667, h * 0.325, s * 0.75, s * constants_1.STROKE * 0.8, colors_1.colors.moon);
    rain_1.rain(ctx, time, w * 0.375, h * 0.5, s * 0.7, s * constants_1.STROKE * 0.9, colors_1.colors.rain);
    cloud_1.cloud(ctx, time, w * 0.375, h * 0.5, s * 0.7, s * constants_1.STROKE * 0.9, colors_1.colors.cloud);
}
exports.iconShowersNight = iconShowersNight;
