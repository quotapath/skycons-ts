import { sleet } from "../elements/sleet";
import { cloud } from "../elements/cloud";
import { STROKE } from "../../constants";

export function iconSleet(ctx: CanvasRenderingContext2D, time: number, color: string): void {
    let w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    sleet(ctx, time, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, time, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
};
