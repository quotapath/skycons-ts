export interface IDrawFunction {
    (ctx: CanvasRenderingContext2D, time: number, color: string): void;
} 