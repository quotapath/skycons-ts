import { TAU } from "../../constants";
import { circle } from "./circle";

export function puff(
  ctx: CanvasRenderingContext2D,
  time: number,
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  rmin: number,
  rmax: number
): void {
  const c = Math.cos(time * TAU);
  const s = Math.sin(time * TAU);
  rmax -= rmin;
  circle(
    ctx,
    cx - s * rx,
    cy + c * ry + rmax * 0.5,
    rmin + (1 - c * 0.5) * rmax
  );
}
