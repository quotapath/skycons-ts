import { puffs } from "./puffs";

export function cloud(ctx: CanvasRenderingContext2D, t: number, cx: number, cy: number, cw: number, s: number, color: string): void {
    t /= 30000;
    const a = cw * 0.21, b = cw * 0.12, c = cw * 0.24, d = cw * 0.28;
    ctx.fillStyle = color;
    puffs(ctx, t, cx, cy, a, b, c, d);
    ctx.globalCompositeOperation = 'destination-out';
    puffs(ctx, t, cx, cy, a, b, c - s, d - s);
    ctx.globalCompositeOperation = 'source-over';
}