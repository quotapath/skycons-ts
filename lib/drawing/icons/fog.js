"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = require("../../colors");
var constants_1 = require("../../constants");
var fogbank_1 = require("../elements/fogbank");
var foglines_1 = require("../elements/foglines");
function iconFog(ctx, time) {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    var shorter = Math.min(width, height);
    var strokeWidth = shorter * constants_1.STROKE;
    fogbank_1.fogbank(ctx, time, width * 0.5, height * 0.32, shorter * 0.75, strokeWidth, colors_1.colors.light_cloud);
    foglines_1.foglines(ctx, time, width, height, shorter, strokeWidth, colors_1.colors.fog);
}
exports.iconFog = iconFog;
