import { puffs } from "./puffs";

export function fogbank(ctx: CanvasRenderingContext2D, time: number, cx: number, cy: number, cw: number, s: number, color: string): void {
    time /= 30000;
    let a = cw * 0.21, b = cw * 0.06, c = cw * 0.21, d = cw * 0.28;
    ctx.fillStyle = color;
    puffs(ctx, time, cx, cy, a, b, c, d);
    ctx.globalCompositeOperation = 'destination-out';
    puffs(ctx, time, cx, cy, a, b, c - s, d - s);
    ctx.globalCompositeOperation = 'source-over';
}