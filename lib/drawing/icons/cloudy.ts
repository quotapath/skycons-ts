import { cloud } from "../elements/cloud";
import { STROKE } from "../../constants";

export function iconCloudy(ctx: CanvasRenderingContext2D, time: number, color: string): void {
    let w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    cloud(ctx, time, w * 0.5, h * 0.5, s, s * STROKE, color);
};