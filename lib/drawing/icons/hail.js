"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = require("../../colors");
var constants_1 = require("../../constants");
var cloud_1 = require("../elements/cloud");
var hail_1 = require("../elements/hail");
function iconHail(ctx, time) {
    var w = ctx.canvas.width;
    var h = ctx.canvas.height;
    var s = Math.min(w, h);
    hail_1.hail(ctx, time, w * 0.5, h * 0.37, s * 0.9, s * constants_1.STROKE, colors_1.colors.hail);
    cloud_1.cloud(ctx, time, w * 0.5, h * 0.37, s * 0.9, s * constants_1.STROKE, colors_1.colors.cloud);
}
exports.iconHail = iconHail;
