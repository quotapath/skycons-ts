import { line } from "./line";

export function sleet(ctx: CanvasRenderingContext2D, time: number, cx: number, cy: number, cw: number, s: number, color: string): void {
    time /= 750;
    let a = cw * 0.1875, i, p, x, y;
    ctx.strokeStyle = color;
    ctx.lineWidth = s * 0.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    for (i = 4; i--;) {
        p = (time + i / 4) % 1;
        x = Math.floor(cx + ((i - 1.5) / 1.5) * (i === 1 || i === 2 ? -1 : 1) * a) + 0.5;
        y = cy + p * cw;
        line(ctx, x, y - s * 1.5, x, y + s * 1.5);
    }
}