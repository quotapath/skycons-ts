import { STROKE } from "../../constants";
import { cloud } from "../elements/cloud";
import { moon } from "../elements/moon";

export function iconPartlyCloudyNight(ctx: CanvasRenderingContext2D, time: number, color: string): void {
    let w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    moon(ctx, time, w * 0.667, h * 0.375, s * 0.75, s * STROKE, color);
    cloud(ctx, time, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);
};