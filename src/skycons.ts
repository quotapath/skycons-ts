import { IDrawFunction } from "./IDrawFunction";
import { getIconDrawingFunctionByName } from "./iconDrawFunctionMap";
import { KEYFRAME } from "./constants";

export interface IConstructorOptions {
    color: string;
    resizeClear: boolean;
}

export interface IIconElement {
    element: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    drawing: IDrawFunction,
}

export class Skycons {
    private interval: number | null = null;
    private readonly list: IIconElement[] = [];

    private readonly opts: IConstructorOptions;

    public constructor(opts: IConstructorOptions) {
        this.opts = {
            color: 'black',
            resizeClear: false,
            ...opts,
        }
    }

    private determineDrawingFunction(draw: string | IDrawFunction): IDrawFunction | null {
        if (typeof draw === "string") {
            return getIconDrawingFunctionByName(draw);
        } else {
            return draw;
        }
    };

    private getCanvas(elementOrId: string | HTMLCanvasElement): HTMLCanvasElement {
        if (typeof elementOrId === "string") {
            return <HTMLCanvasElement>document.getElementById(elementOrId);
        } else {
            return elementOrId;
        }
    }

    public add(elementOrId: string | HTMLCanvasElement, draw: string | IDrawFunction) {
        let canvas = this.getCanvas(elementOrId);
        if (!canvas) {
            return;
        }

        const drawFn = this.determineDrawingFunction(draw);
        if (!drawFn) {
            return;
        }

        const ctx = canvas.getContext('2d');
        if (!ctx) {
            return;
        }

        const obj: IIconElement = {
            element: canvas,
            context: ctx,
            drawing: drawFn
        };

        this.list.push(obj);
        this.draw(obj, KEYFRAME);
    }

    public set(elementOrId: string | HTMLCanvasElement, draw: IDrawFunction) {
        const canvas = this.getCanvas(elementOrId)

        const obj = this.list.find(o => o.element === canvas);
        if (obj) {
            const drawFn = this.determineDrawingFunction(draw);
            if (!drawFn) {
                return;
            }

            obj.drawing = drawFn;
            this.draw(obj, KEYFRAME);
        } else {
            this.add(canvas, draw);
        }
    }

    public remove(elementOrId: string | HTMLCanvasElement) {
        let canvas = this.getCanvas(elementOrId);
        const i = this.list.findIndex(o => o.element === canvas);
        if (i >= 0) {
            this.list.splice(i, 1);
        }
    }

    public draw(obj: IIconElement, time: number) {
        let canvas = obj.context.canvas;

        if (this.opts.resizeClear) {
            canvas.width = canvas.width;
        } else {
            obj.context.clearRect(0, 0, canvas.width, canvas.height);
        }

        obj.drawing(obj.context, time, this.opts.color);
    }

    public play() {
        this.pause();

        this.interval = requestAnimationFrame(() => {
            const now = Date.now();
            this.list.forEach(o => this.draw(o, now));
        });
    }

    public pause() {
        if (this.interval) {
            cancelAnimationFrame(this.interval);
            this.interval = null;
        }
    }
}
