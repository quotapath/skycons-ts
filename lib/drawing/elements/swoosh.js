"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var wind_1 = require("../../wind");
var leaf_1 = require("./leaf");
function swoosh(ctx, time, cx, cy, cw, stroke, index, total, color, leafcolor) {
    time /= 2500;
    var path = wind_1.WIND_PATHS[index];
    var a = (time + index - wind_1.WIND_OFFSETS[index].start) % total;
    var c = (time + index - wind_1.WIND_OFFSETS[index].end) % total;
    var e = (time + index) % total;
    var b;
    var d;
    var f;
    var i;
    ctx.strokeStyle = color;
    ctx.lineWidth = stroke;
    if (a < 1) {
        ctx.beginPath();
        a *= path.length / 2 - 1;
        b = Math.floor(a);
        a -= b;
        b *= 2;
        b += 2;
        ctx.moveTo(cx + (path[b - 2] * (1 - a) + path[b] * a) * cw, cy + (path[b - 1] * (1 - a) + path[b + 1] * a) * cw);
        if (c < 1) {
            c *= path.length / 2 - 1;
            d = Math.floor(c);
            c -= d;
            d *= 2;
            d += 2;
            for (i = b; i !== d; i += 2) {
                ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);
            }
            ctx.lineTo(cx + (path[d - 2] * (1 - c) + path[d] * c) * cw, cy + (path[d - 1] * (1 - c) + path[d + 1] * c) * cw);
        }
        else {
            for (i = b; i !== path.length; i += 2) {
                ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);
            }
        }
        ctx.stroke();
    }
    else if (c < 1) {
        ctx.beginPath();
        c *= path.length / 2 - 1;
        d = Math.floor(c);
        c -= d;
        d *= 2;
        d += 2;
        ctx.moveTo(cx + path[0] * cw, cy + path[1] * cw);
        for (i = 2; i !== d; i += 2) {
            ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);
        }
        ctx.lineTo(cx + (path[d - 2] * (1 - c) + path[d] * c) * cw, cy + (path[d - 1] * (1 - c) + path[d + 1] * c) * cw);
        ctx.stroke();
    }
    if (e < 1) {
        e *= path.length / 2 - 1;
        f = Math.floor(e);
        e -= f;
        f *= 2;
        f += 2;
        leaf_1.leaf(ctx, time, cx + (path[f - 2] * (1 - e) + path[f] * e) * cw, cy + (path[f - 1] * (1 - e) + path[f + 1] * e) * cw, cw, stroke, leafcolor);
    }
}
exports.swoosh = swoosh;
