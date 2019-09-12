import { colors } from "../../colors";
import { STROKE } from "../../constants";
import { cloud } from "../elements/cloud";
import { moon } from "../elements/moon";
import { rain } from "../elements/rain";
import { snow } from "../elements/snow";

export function iconRainSnowShowersNight(
  ctx: CanvasRenderingContext2D,
  time: number
): void {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  const s = Math.min(width, height);

  moon(
    ctx,
    time,
    width * 0.667,
    height * 0.325,
    s * 0.75,
    s * STROKE * 0.8,
    colors.moon
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
