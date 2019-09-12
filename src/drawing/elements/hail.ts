export function hail(
  ctx: CanvasRenderingContext2D,
  time: number,
  cx: number,
  cy: number,
  cw: number,
  s: number,
  color: string
) {
  time /= 900;

  const a = cw * 0.16;
  let i;
  let p;
  let x;
  let y;

  ctx.fillStyle = color;

  for (i = 8; i--; ) {
    p = (time + i / 8) % 1;
    x =
      cx +
      ((i - 3) / 3) * (i === 1 || i === 3 || i === 4 || i === 6 ? -1 : 1) * a;
    y = cy + p * p * cw;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y, s * 0.4, 0, 2 * Math.PI, false);
    ctx.fill();
  }
}
