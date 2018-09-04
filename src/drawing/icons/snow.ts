import { STROKE } from "../../constants";
import { cloud } from "../elements/cloud";
import { snow } from "../elements/snow";

export function iconSnow(ctx: CanvasRenderingContext2D, time: number): void {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  const shorter = Math.min(width, height);

  snow(ctx, time, width * 0.5, height * 0.37, shorter * 0.9, shorter * STROKE);
  cloud(ctx, time, width * 0.5, height * 0.37, shorter * 0.9, shorter * STROKE);
}
