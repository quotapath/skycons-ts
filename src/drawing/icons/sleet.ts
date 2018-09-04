import { STROKE } from "../../constants";
import { cloud } from "../elements/cloud";
import { sleet } from "../elements/sleet";

export function iconSleet(ctx: CanvasRenderingContext2D, time: number): void {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  const shorter = Math.min(width, height);

  sleet(ctx, time, width * 0.5, height * 0.37, shorter * 0.9, shorter * STROKE);
  cloud(ctx, time, width * 0.5, height * 0.37, shorter * 0.9, shorter * STROKE);
}
