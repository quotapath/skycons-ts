import { STROKE } from "../../constants";
import { swoosh } from "../elements/swoosh";

export function iconWind(ctx: CanvasRenderingContext2D, time: number): void {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  const shorter = Math.min(width, height);

  swoosh(ctx, time, width * 0.5, height * 0.5, shorter, shorter * STROKE, 0, 2);
  swoosh(ctx, time, width * 0.5, height * 0.5, shorter, shorter * STROKE, 1, 2);
}
