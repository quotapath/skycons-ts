import { TAU } from "../../constants";

export function leaf(ctx: CanvasRenderingContext2D, time: number, x: number, y: number, cw: number, s: number, color: string): void {
    const a = cw / 8, b = a / 3, c = 2 * b, d = (time % 1) * TAU, e = Math.cos(d), f = Math.sin(d);
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.arc(x, y, a, d, d + Math.PI, false);
    ctx.arc(x - b * e, y - b * f, c, d + Math.PI, d, false);
    ctx.arc(x + c * e, y + c * f, b, d + Math.PI, d, true);
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
    ctx.stroke();
}