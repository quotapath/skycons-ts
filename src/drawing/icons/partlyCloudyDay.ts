import { STROKE } from "../../constants";
import { cloud } from "../elements/cloud";
import { sun } from "../elements/sun";

export function iconPartlyCloudyDay(ctx: CanvasRenderingContext2D, time: number, color: string): void {
    const w = ctx.canvas.width;
    const h = ctx.canvas.height;
    const s = Math.min(w, h);

    sun(ctx, time, w * 0.625, h * 0.375, s * 0.75, s * STROKE, color);
    cloud(ctx, time, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);
}
