import { colors } from "../../colors";
import { STROKE } from "../../constants";
import { cloud } from "../elements/cloud";
import { rain } from "../elements/rain";
import { snow } from "../elements/snow";

export function iconRainSnow(
  ctx: CanvasRenderingContext2D,
  time: number
): void {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  const shorter = Math.min(width, height);

  rain(
    ctx,
    time,
    width * 0.5,
    height * 0.37,
    shorter * 0.9,
    shorter * STROKE,
    colors.rain
  );
  snow(
    ctx,
    time,
    width * 0.5,
    height * 0.37,
    shorter * 0.9,
    shorter * STROKE,
    colors.snow
  );
  cloud(
    ctx,
    time,
    width * 0.5,
    height * 0.37,
    shorter * 0.9,
    shorter * STROKE,
    colors.cloud
  );
}
