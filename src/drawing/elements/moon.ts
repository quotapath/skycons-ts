import { TAU, TWO_OVER_SQRT_2 } from "../../constants";

export function moon(
  ctx: CanvasRenderingContext2D,
  t: number,
  cx: number,
  cy: number,
  cw: number,
  s: number,
  color: string
): void {
  t /= 15000;
  const a = cw * 0.29 - s * 0.5;
  const b = cw * 0.05;
  const c = Math.cos(t * TAU);
  const p = (c * TAU) / -16;

  ctx.strokeStyle = color;
  ctx.lineWidth = s;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  cx += c * b;
  ctx.beginPath();
  ctx.arc(cx, cy, a, p + TAU / 8, p + (TAU * 7) / 8, false);
  ctx.arc(
    cx + Math.cos(p) * a * TWO_OVER_SQRT_2,
    cy + Math.sin(p) * a * TWO_OVER_SQRT_2,
    a,
    p + (TAU * 5) / 8,
    p + (TAU * 3) / 8,
    true
  );
  ctx.closePath();
  ctx.stroke();
}
