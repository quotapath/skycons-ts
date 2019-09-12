"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = require("../../colors");
var constants_1 = require("../../constants");
var cloud_1 = require("../elements/cloud");
var moon_1 = require("../elements/moon");
function iconPartlyCloudyNight(ctx, time) {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    var shorter = Math.min(width, height);
    moon_1.moon(ctx, time, width * 0.667, height * 0.375, shorter * 0.75, shorter * constants_1.STROKE, colors_1.colors.moon);
    cloud_1.cloud(ctx, time, width * 0.375, height * 0.625, shorter * 0.75, shorter * constants_1.STROKE, colors_1.colors.cloud);
}
exports.iconPartlyCloudyNight = iconPartlyCloudyNight;
