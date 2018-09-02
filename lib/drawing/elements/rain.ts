import { TAU } from "../../constants";

export function rain(ctx: CanvasRenderingContext2D, time: number, cx: number, cy: number, cw: number, s: number, color: string) {
    time /= 1350;
    const a = cw * 0.16, b = TAU * 11 / 12, c = TAU * 7 / 12;
    let i, p, x, y;
    ctx.fillStyle = color;
    for (i = 4; i--;) {
        p = (time + i / 4) % 1;
        x = cx + ((i - 1.5) / 1.5) * (i === 1 || i === 2 ? -1 : 1) * a;
        y = cy + p * p * cw;
        ctx.beginPath();
        ctx.moveTo(x, y - s * 1.5);
        ctx.arc(x, y, s * 0.75, b, c, false);
        ctx.fill();
    }
}