import { colors } from "../../colors";
import { STROKE } from "../../constants";
import { fogbank } from "../elements/fogbank";
import { foglines } from "../elements/foglines";

export function iconFog(ctx: CanvasRenderingContext2D, time: number): void {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  const shorter = Math.min(width, height);
  const strokeWidth = shorter * STROKE;

  fogbank(
    ctx,
    time,
    width * 0.5,
    height * 0.32,
    shorter * 0.75,
    strokeWidth,
    colors.light_cloud
  );

  foglines(ctx, time, width, height, shorter, strokeWidth, colors.fog);
}
