"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = require("../../colors");
var constants_1 = require("../../constants");
var cloud_1 = require("../elements/cloud");
var moon_1 = require("../elements/moon");
var rain_1 = require("../elements/rain");
var snow_1 = require("../elements/snow");
function iconRainSnowShowersNight(ctx, time) {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    var s = Math.min(width, height);
    moon_1.moon(ctx, time, width * 0.667, height * 0.325, s * 0.75, s * constants_1.STROKE * 0.8, colors_1.colors.moon);
    snow_1.snow(ctx, time, width * 0.375, height * 0.5, s * 0.7, s * constants_1.STROKE * 0.9, colors_1.colors.snow);
    rain_1.rain(ctx, time, width * 0.375, height * 0.5, s * 0.7, s * constants_1.STROKE * 0.9, colors_1.colors.rain);
    cloud_1.cloud(ctx, time, width * 0.375, height * 0.5, s * 0.7, s * constants_1.STROKE * 0.9, colors_1.colors.cloud);
}
exports.iconRainSnowShowersNight = iconRainSnowShowersNight;
