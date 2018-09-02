import { line } from "./line";
import { TAU } from "../../constants";

export function snow(ctx: CanvasRenderingContext2D, time: number, cx: number, cy: number, cw: number, s: number, color: string): void {
    time /= 3000;
    let a = cw * 0.16, b = s * 0.75, u = time * TAU * 0.7, ux = Math.cos(u) * b, uy = Math.sin(u) * b, v = u + TAU / 3, vx = Math.cos(v) * b, vy = Math.sin(v) * b, w = u + TAU * 2 / 3, wx = Math.cos(w) * b, wy = Math.sin(w) * b, i, p, x, y;
    ctx.strokeStyle = color;
    ctx.lineWidth = s * 0.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    for (i = 4; i--;) {
        p = (time + i / 4) % 1;
        x = cx + Math.sin((p + i / 4) * TAU) * a;
        y = cy + p * cw;
        line(ctx, x - ux, y - uy, x + ux, y + uy);
        line(ctx, x - vx, y - vy, x + vx, y + vy);
        line(ctx, x - wx, y - wy, x + wx, y + wy);
    }
}