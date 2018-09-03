import { STROKE } from "../../constants";
import { sun } from "../elements/sun";

export function iconClearDay(
  ctx: CanvasRenderingContext2D,
  time: number,
  color: string
): void {
  const w = ctx.canvas.width;
  const h = ctx.canvas.height;
  const s = Math.min(w, h);
  sun(ctx, time, w * 0.5, h * 0.5, s, s * STROKE, color);
}
