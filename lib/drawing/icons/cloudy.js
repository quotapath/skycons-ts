"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = require("../../colors");
var constants_1 = require("../../constants");
var cloud_1 = require("../elements/cloud");
function iconCloudy(ctx, time) {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    var shorter = Math.min(width, height);
    cloud_1.cloud(ctx, time, width * 0.5, height * 0.5, shorter, shorter * constants_1.STROKE, colors_1.colors.light_cloud);
}
exports.iconCloudy = iconCloudy;
