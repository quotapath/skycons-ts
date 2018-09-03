import { STROKE } from "../../constants";
import { cloud } from "../elements/cloud";
import { rain } from "../elements/rain";

export function iconRain(
  ctx: CanvasRenderingContext2D,
  time: number,
  color: string
): void {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  const shorter = Math.min(width, height);

  rain(ctx, time, width * 0.5, height * 0.37, shorter * 0.9, shorter * STROKE, color);
  cloud(ctx, time, width * 0.5, height * 0.37, shorter * 0.9, shorter * STROKE, color);
}
