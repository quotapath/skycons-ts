"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = require("../../colors");
var constants_1 = require("../../constants");
var cloud_1 = require("../elements/cloud");
var rain_1 = require("../elements/rain");
var snow_1 = require("../elements/snow");
var sun_1 = require("../elements/sun");
function iconRainSnowShowersDay(ctx, time) {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    var s = Math.min(width, height);
    sun_1.sun(ctx, time, width * 0.625, height * 0.325, s * 0.65, s * constants_1.STROKE * 0.8, colors_1.colors.sun);
    snow_1.snow(ctx, time, width * 0.375, height * 0.5, s * 0.7, s * constants_1.STROKE * 0.9, colors_1.colors.snow);
    rain_1.rain(ctx, time, width * 0.375, height * 0.5, s * 0.7, s * constants_1.STROKE * 0.9, colors_1.colors.rain);
    cloud_1.cloud(ctx, time, width * 0.375, height * 0.5, s * 0.7, s * constants_1.STROKE * 0.9, colors_1.colors.cloud);
}
exports.iconRainSnowShowersDay = iconRainSnowShowersDay;
