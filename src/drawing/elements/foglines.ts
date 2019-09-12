import { TAU } from "../../constants";
import { line } from "./line";

export function foglines(
  ctx: CanvasRenderingContext2D,
  time: number,
  cw: number,
  ch: number,
  s: number,
  k: number,
  color: string
) {
  time /= 5000;

  const a = Math.cos(time * TAU) * s * 0.02;
  const b = Math.cos((time + 0.25) * TAU) * s * 0.02;
  const c = Math.cos((time + 0.5) * TAU) * s * 0.02;
  const d = Math.cos((time + 0.75) * TAU) * s * 0.02;
  const n = ch * 0.936;
  const e = Math.floor(n - k * 0.5) + 0.5;
  const f = Math.floor(n - k * 2.5) + 0.5;

  ctx.strokeStyle = color;
  ctx.lineWidth = k;

  line(ctx, a + cw * 0.2 + k * 0.5, e, b + cw * 0.8 - k * 0.5, e);
  line(ctx, c + cw * 0.2 + k * 0.5, f, d + cw * 0.8 - k * 0.5, f);
}
