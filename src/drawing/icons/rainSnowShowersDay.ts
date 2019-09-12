import { colors } from "../../colors";
import { STROKE } from "../../constants";
import { cloud } from "../elements/cloud";
import { rain } from "../elements/rain";
import { snow } from "../elements/snow";
import { sun } from "../elements/sun";

export function iconRainSnowShowersDay(
  ctx: CanvasRenderingContext2D,
  time: number
): void {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  const s = Math.min(width, height);

  sun(
    ctx,
    time,
    width * 0.625,
    height * 0.325,
    s * 0.65,
    s * STROKE * 0.8,
    colors.sun
  );
  snow(
    ctx,
    time,
    width * 0.375,
    height * 0.5,
    s * 0.7,
    s * STROKE * 0.9,
    colors.snow
  );
  rain(
    ctx,
    time,
    width * 0.375,
    height * 0.5,
    s * 0.7,
    s * STROKE * 0.9,
    colors.rain
  );
  cloud(
    ctx,
    time,
    width * 0.375,
    height * 0.5,
    s * 0.7,
    s * STROKE * 0.9,
    colors.cloud
  );
}
