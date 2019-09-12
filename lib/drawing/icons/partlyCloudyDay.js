"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = require("../../colors");
var constants_1 = require("../../constants");
var cloud_1 = require("../elements/cloud");
var sun_1 = require("../elements/sun");
function iconPartlyCloudyDay(ctx, time) {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    var shorter = Math.min(width, height);
    sun_1.sun(ctx, time, width * 0.625, height * 0.375, shorter * 0.75, shorter * constants_1.STROKE, colors_1.colors.sun);
    cloud_1.cloud(ctx, time, width * 0.375, height * 0.625, shorter * 0.75, shorter * constants_1.STROKE, colors_1.colors.cloud);
}
exports.iconPartlyCloudyDay = iconPartlyCloudyDay;
