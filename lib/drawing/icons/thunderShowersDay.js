"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = require("../../colors");
var constants_1 = require("../../constants");
var cloud_1 = require("../elements/cloud");
var rain_1 = require("../elements/rain");
var sun_1 = require("../elements/sun");
var thunderbolts_1 = require("../elements/thunderbolts");
function iconThunderShowersDay(ctx, time) {
    var w = ctx.canvas.width;
    var h = ctx.canvas.height;
    var s = Math.min(w, h);
    thunderbolts_1.thunderbolts(ctx, time, w * 0.375, h * 0.85, s * 0.7, colors_1.colors.thunder);
    sun_1.sun(ctx, time, w * 0.625, h * 0.325, s * 0.65, s * constants_1.STROKE * 0.8, colors_1.colors.sun);
    rain_1.rain(ctx, time, w * 0.375, h * 0.5, s * 0.7, s * constants_1.STROKE * 0.9, colors_1.colors.rain);
    cloud_1.cloud(ctx, time, w * 0.375, h * 0.5, s * 0.7, s * constants_1.STROKE * 0.9, colors_1.colors.dark_cloud);
}
exports.iconThunderShowersDay = iconThunderShowersDay;
