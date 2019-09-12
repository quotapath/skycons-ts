import { colors } from "../../colors";
import { STROKE } from "../../constants";
import { moon } from "../elements/moon";

export function iconClearNight(
  ctx: CanvasRenderingContext2D,
  time: number
): void {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  const shorter = Math.min(width, height);

  moon(
    ctx,
    time,
    width * 0.5,
    height * 0.5,
    shorter,
    shorter * STROKE,
    colors.moon
  );
}
