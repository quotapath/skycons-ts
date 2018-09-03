import { STROKE } from "../../constants";
import { moon } from "../elements/moon";

export function iconClearNight(ctx: CanvasRenderingContext2D, time: number, color: string): void {
    let w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    moon(ctx, time, w * 0.5, h * 0.5, s, s * STROKE, color);
};