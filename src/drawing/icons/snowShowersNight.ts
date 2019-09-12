import { colors } from "../../colors";
import { STROKE } from "../../constants";
import { cloud } from "../elements/cloud";
import { moon } from "../elements/moon";
import { snow } from "../elements/snow";

export function iconSnowShowersNight(
  ctx: CanvasRenderingContext2D,
  time: number
): void {
  const w = ctx.canvas.width;
  const h = ctx.canvas.height;
  const s = Math.min(w, h);

  moon(
    ctx,
    time,
    w * 0.667,
    h * 0.325,
    s * 0.75,
    s * STROKE * 0.8,
    colors.moon
  );
  snow(ctx, time, w * 0.375, h * 0.5, s * 0.7, s * STROKE * 0.9, colors.snow);
  cloud(ctx, time, w * 0.375, h * 0.5, s * 0.7, s * STROKE * 0.9, colors.cloud);
}
