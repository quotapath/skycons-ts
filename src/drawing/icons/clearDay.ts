import { STROKE } from "../../constants";
import { sun } from "../elements/sun";

export function iconClearDay(
  ctx: CanvasRenderingContext2D,
  time: number,
  color: string
): void {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  const shorter = Math.min(width, height);

  sun(ctx, time, width * 0.5, height * 0.5, shorter, shorter * STROKE, color);
}
