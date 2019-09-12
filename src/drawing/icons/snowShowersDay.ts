import { colors } from "../../colors";
import { STROKE } from "../../constants";
import { cloud } from "../elements/cloud";
import { snow } from "../elements/snow";
import { sun } from "../elements/sun";

export function iconSnowShowersDay(
  ctx: CanvasRenderingContext2D,
  time: number
): void {
  const w = ctx.canvas.width;
  const h = ctx.canvas.height;
  const s = Math.min(w, h);

  sun(ctx, time, w * 0.625, h * 0.325, s * 0.65, s * STROKE * 0.8, colors.sun);
  snow(ctx, time, w * 0.375, h * 0.5, s * 0.7, s * STROKE * 0.9, colors.snow);
  cloud(ctx, time, w * 0.375, h * 0.5, s * 0.7, s * STROKE * 0.9, colors.cloud);
}
