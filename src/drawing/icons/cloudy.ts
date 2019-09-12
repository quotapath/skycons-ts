import { colors } from "../../colors";
import { STROKE } from "../../constants";
import { cloud } from "../elements/cloud";

export function iconCloudy(ctx: CanvasRenderingContext2D, time: number): void {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  const shorter = Math.min(width, height);

  cloud(
    ctx,
    time,
    width * 0.5,
    height * 0.5,
    shorter,
    shorter * STROKE,
    colors.light_cloud
  );
}
