import { colors } from "../../colors";
import { STROKE } from "../../constants";
import { cloud } from "../elements/cloud";
import { hail } from "../elements/hail";

export function iconHail(ctx: CanvasRenderingContext2D, time: number): void {
  const w = ctx.canvas.width;
  const h = ctx.canvas.height;
  const s = Math.min(w, h);

  hail(ctx, time, w * 0.5, h * 0.37, s * 0.9, s * STROKE, colors.hail);
  cloud(ctx, time, w * 0.5, h * 0.37, s * 0.9, s * STROKE, colors.cloud);
}
