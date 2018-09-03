import { STROKE, TAU } from "../../constants";
import { fogbank } from "../elements/fogbank";
import { line } from "../elements/line";

export function iconFog(ctx: CanvasRenderingContext2D, time: number, color: string): void {
    let w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h),
        k = s * STROKE;

    fogbank(ctx, time, w * 0.5, h * 0.32, s * 0.75, k, color);

    time /= 5000;

    let a = Math.cos((time) * TAU) * s * 0.02,
        b = Math.cos((time + 0.25) * TAU) * s * 0.02,
        c = Math.cos((time + 0.50) * TAU) * s * 0.02,
        d = Math.cos((time + 0.75) * TAU) * s * 0.02,
        n = h * 0.936,
        e = Math.floor(n - k * 0.5) + 0.5,
        f = Math.floor(n - k * 2.5) + 0.5;

    ctx.strokeStyle = color;
    ctx.lineWidth = k;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    line(ctx, a + w * 0.2 + k * 0.5, e, b + w * 0.8 - k * 0.5, e);
    line(ctx, c + w * 0.2 + k * 0.5, f, d + w * 0.8 - k * 0.5, f);
};