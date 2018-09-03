import { STROKE } from "../../constants";
import { swoosh } from "../elements/swoosh";

export function iconWind(
  ctx: CanvasRenderingContext2D,
  time: number,
  color: string
): void {
  const w = ctx.canvas.width;
  const h = ctx.canvas.height;
  const s = Math.min(w, h);

  swoosh(ctx, time, w * 0.5, h * 0.5, s, s * STROKE, 0, 2, color);
  swoosh(ctx, time, w * 0.5, h * 0.5, s, s * STROKE, 1, 2, color);
}
