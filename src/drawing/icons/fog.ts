import { STROKE, TAU } from "../../constants";
import { fogbank } from "../elements/fogbank";
import { line } from "../elements/line";

export function iconFog(ctx: CanvasRenderingContext2D, time: number, color: string): void {
    const w = ctx.canvas.width;
    const h = ctx.canvas.height;
    const s = Math.min(w, h);
    const k = s * STROKE;

    fogbank(ctx, time, w * 0.5, h * 0.32, s * 0.75, k, color);

    time /= 5000;

    const a = Math.cos((time) * TAU) * s * 0.02;
    const b = Math.cos((time + 0.25) * TAU) * s * 0.02;
    const c = Math.cos((time + 0.50) * TAU) * s * 0.02;
    const d = Math.cos((time + 0.75) * TAU) * s * 0.02;
    const n = h * 0.936;
    const e = Math.floor(n - k * 0.5) + 0.5;
    const f = Math.floor(n - k * 2.5) + 0.5;

    ctx.strokeStyle = color;
    ctx.lineWidth = k;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    line(ctx, a + w * 0.2 + k * 0.5, e, b + w * 0.8 - k * 0.5, e);
    line(ctx, c + w * 0.2 + k * 0.5, f, d + w * 0.8 - k * 0.5, f);
}
