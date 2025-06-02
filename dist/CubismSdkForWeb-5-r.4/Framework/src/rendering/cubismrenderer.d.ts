import { CubismMatrix44 } from '../math/cubismmatrix44';
import { CubismModel } from '../model/cubismmodel';
import { csmRect } from '../type/csmrectf';
import { ICubismClippingManager } from './cubismclippingmanager';
export declare abstract class CubismRenderer {
    static create(): CubismRenderer;
    static delete(renderer: CubismRenderer): void;
    initialize(model: CubismModel): void;
    drawModel(): void;
    setMvpMatrix(matrix44: CubismMatrix44): void;
    getMvpMatrix(): CubismMatrix44;
    setModelColor(red: number, green: number, blue: number, alpha: number): void;
    getModelColor(): CubismTextureColor;
    getModelColorWithOpacity(opacity: number): CubismTextureColor;
    setIsPremultipliedAlpha(enable: boolean): void;
    isPremultipliedAlpha(): boolean;
    setIsCulling(culling: boolean): void;
    isCulling(): boolean;
    setAnisotropy(n: number): void;
    getAnisotropy(): number;
    getModel(): CubismModel;
    useHighPrecisionMask(high: boolean): void;
    isUsingHighPrecisionMask(): boolean;
    protected constructor();
    abstract doDrawModel(): void;
    protected abstract saveProfile(): void;
    protected abstract restoreProfile(): void;
    static staticRelease: any;
    protected _mvpMatrix4x4: CubismMatrix44;
    protected _modelColor: CubismTextureColor;
    protected _isCulling: boolean;
    protected _isPremultipliedAlpha: boolean;
    protected _anisotropy: any;
    protected _model: CubismModel;
    protected _useHighPrecisionMask: boolean;
}
export declare enum CubismBlendMode {
    CubismBlendMode_Normal = 0,
    CubismBlendMode_Additive = 1,
    CubismBlendMode_Multiplicative = 2
}
export declare class CubismTextureColor {
    constructor(r?: number, g?: number, b?: number, a?: number);
    r: number;
    g: number;
    b: number;
    a: number;
}
export declare abstract class CubismClippingContext {
    constructor(clippingDrawableIndices: Int32Array, clipCount: number);
    abstract getClippingManager(): ICubismClippingManager;
    release(): void;
    addClippedDrawable(drawableIndex: number): void;
    _isUsing: boolean;
    readonly _clippingIdList: Int32Array;
    _clippingIdCount: number;
    _layoutChannelIndex: number;
    _layoutBounds: csmRect;
    _allClippedDrawRect: csmRect;
    _matrixForMask: CubismMatrix44;
    _matrixForDraw: CubismMatrix44;
    _clippedDrawableIndexList: number[];
    _bufferIndex: number;
}
import * as $ from './cubismrenderer';
export declare namespace Live2DCubismFramework {
    const CubismBlendMode: typeof $.CubismBlendMode;
    type CubismBlendMode = $.CubismBlendMode;
    const CubismRenderer: typeof $.CubismRenderer;
    type CubismRenderer = $.CubismRenderer;
    const CubismTextureColor: typeof $.CubismTextureColor;
    type CubismTextureColor = $.CubismTextureColor;
}
