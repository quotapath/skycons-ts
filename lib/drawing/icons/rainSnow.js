"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = require("../../colors");
var constants_1 = require("../../constants");
var cloud_1 = require("../elements/cloud");
var rain_1 = require("../elements/rain");
var snow_1 = require("../elements/snow");
function iconRainSnow(ctx, time) {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    var shorter = Math.min(width, height);
    rain_1.rain(ctx, time, width * 0.5, height * 0.37, shorter * 0.9, shorter * constants_1.STROKE, colors_1.colors.rain);
    snow_1.snow(ctx, time, width * 0.5, height * 0.37, shorter * 0.9, shorter * constants_1.STROKE, colors_1.colors.snow);
    cloud_1.cloud(ctx, time, width * 0.5, height * 0.37, shorter * 0.9, shorter * constants_1.STROKE, colors_1.colors.cloud);
}
exports.iconRainSnow = iconRainSnow;
