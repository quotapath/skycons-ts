import { TAU } from "../../constants";
import { line } from "./line";

export function sun(ctx: CanvasRenderingContext2D, time: number, cx: number, cy: number, cw: number, s: number, color: string): void {
    time /= 120000;
    let a = cw * 0.25 - s * 0.5, b = cw * 0.32 + s * 0.5, c = cw * 0.50 - s * 0.5, i, p, cos, sin;
    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.arc(cx, cy, a, 0, TAU, false);
    ctx.stroke();
    for (i = 8; i--;) {
        p = (time + i / 8) * TAU;
        cos = Math.cos(p);
        sin = Math.sin(p);
        line(ctx, cx + cos * b, cy + sin * b, cx + cos * c, cy + sin * c);
    }
}