"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = require("../../colors");
var constants_1 = require("../../constants");
var cloud_1 = require("../elements/cloud");
var snow_1 = require("../elements/snow");
var sun_1 = require("../elements/sun");
function iconSnowShowersDay(ctx, time) {
    var w = ctx.canvas.width;
    var h = ctx.canvas.height;
    var s = Math.min(w, h);
    sun_1.sun(ctx, time, w * 0.625, h * 0.325, s * 0.65, s * constants_1.STROKE * 0.8, colors_1.colors.sun);
    snow_1.snow(ctx, time, w * 0.375, h * 0.5, s * 0.7, s * constants_1.STROKE * 0.9, colors_1.colors.snow);
    cloud_1.cloud(ctx, time, w * 0.375, h * 0.5, s * 0.7, s * constants_1.STROKE * 0.9, colors_1.colors.cloud);
}
exports.iconSnowShowersDay = iconSnowShowersDay;