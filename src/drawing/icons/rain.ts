import { rain } from "../elements/rain";
import { cloud } from "../elements/cloud";
import { STROKE } from "../../constants";

export function iconRain(ctx: CanvasRenderingContext2D, time: number, color: string): void {
    let w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    rain(ctx, time, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, time, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
};
