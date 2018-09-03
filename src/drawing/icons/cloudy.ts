import { STROKE } from "../../constants";
import { cloud } from "../elements/cloud";

export function iconCloudy(ctx: CanvasRenderingContext2D, time: number, color: string): void {
    const w = ctx.canvas.width;
    const h = ctx.canvas.height;
    const s = Math.min(w, h);

    cloud(ctx, time, w * 0.5, h * 0.5, s, s * STROKE, color);
}
