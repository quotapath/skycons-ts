import { colors } from "../../colors";
import { STROKE } from "../../constants";
import { cloud } from "../elements/cloud";
import { thunderbolts } from "../elements/thunderbolts";

export function iconThunder(ctx: CanvasRenderingContext2D, time: number): void {
  const w = ctx.canvas.width;
  const h = ctx.canvas.height;
  const s = Math.min(w, h);

  thunderbolts(ctx, time, w * 0.5, h * 0.825, s * 0.9, colors.thunder);
  cloud(ctx, time, w * 0.5, h * 0.37, s * 0.9, s * STROKE, colors.dark_cloud);
}
