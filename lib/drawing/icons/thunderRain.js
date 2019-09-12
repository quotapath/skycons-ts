"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = require("../../colors");
var constants_1 = require("../../constants");
var cloud_1 = require("../elements/cloud");
var rain_1 = require("../elements/rain");
var thunderbolts_1 = require("../elements/thunderbolts");
function iconThunderRain(ctx, time) {
    var w = ctx.canvas.width;
    var h = ctx.canvas.height;
    var s = Math.min(w, h);
    rain_1.rain(ctx, time, w * 0.5, h * 0.5, s * 0.9, s * constants_1.STROKE, colors_1.colors.rain);
    thunderbolts_1.thunderbolts(ctx, time, w * 0.5, h * 0.825, s * 0.9, colors_1.colors.thunder);
    cloud_1.cloud(ctx, time, w * 0.5, h * 0.37, s * 0.9, s * constants_1.STROKE, colors_1.colors.dark_cloud);
}
exports.iconThunderRain = iconThunderRain;
