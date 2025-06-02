export declare class LAppGlManager {
    constructor();
    initialize(canvas: HTMLCanvasElement): boolean;
    release(): void;
    getGl(): WebGLRenderingContext | WebGL2RenderingContext;
    private _gl;
}
