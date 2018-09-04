import { puffs } from "./puffs";

export function cloud(
  ctx: CanvasRenderingContext2D,
  time: number,
  cx: number,
  cy: number,
  cw: number,
  stroke: number
): void {
  time /= 30000;

  const a = cw * 0.21;
  const b = cw * 0.12;
  const c = cw * 0.24;
  const d = cw * 0.28;

  puffs(ctx, time, cx, cy, a, b, c, d);
  ctx.globalCompositeOperation = "destination-out";
  puffs(ctx, time, cx, cy, a, b, c - stroke, d - stroke);
  ctx.globalCompositeOperation = "source-over";
}
