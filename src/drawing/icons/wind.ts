import { swoosh } from "../elements/swoosh";
import { STROKE } from "../../constants";

export function iconWind(ctx: CanvasRenderingContext2D, time: number, color: string): void {
    let w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    swoosh(ctx, time, w * 0.5, h * 0.5, s, s * STROKE, 0, 2, color);
    swoosh(ctx, time, w * 0.5, h * 0.5, s, s * STROKE, 1, 2, color);
};