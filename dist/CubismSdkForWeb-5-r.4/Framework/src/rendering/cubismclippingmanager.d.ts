import { csmVector } from '../type/csmvector';
import { csmRect } from '../type/csmrectf';
import { CubismMatrix44 } from '../math/cubismmatrix44';
import { CubismModel } from '../model/cubismmodel';
import { CubismClippingContext, CubismTextureColor } from './cubismrenderer';
export type ClippingContextConstructor<T_ClippingContext extends CubismClippingContext> = new (manager: CubismClippingManager<T_ClippingContext>, drawableMasks: Int32Array, drawableMaskCounts: number) => T_ClippingContext;
export interface ICubismClippingManager {
    getClippingMaskBufferSize(): number;
}
export declare abstract class CubismClippingManager<T_ClippingContext extends CubismClippingContext> implements ICubismClippingManager {
    constructor(clippingContextFactory: ClippingContextConstructor<T_ClippingContext>);
    release(): void;
    initialize(model: CubismModel, renderTextureCount: number): void;
    findSameClip(drawableMasks: Int32Array, drawableMaskCounts: number): T_ClippingContext;
    setupMatrixForHighPrecision(model: CubismModel, isRightHanded: boolean): void;
    createMatrixForMask(isRightHanded: boolean, layoutBoundsOnTex01: csmRect, scaleX: number, scaleY: number): void;
    setupLayoutBounds(usingClipCount: number): void;
    calcClippedDrawTotalBounds(model: CubismModel, clippingContext: T_ClippingContext): void;
    getClippingContextListForDraw(): csmVector<T_ClippingContext>;
    getClippingMaskBufferSize(): number;
    getRenderTextureCount(): number;
    getChannelFlagAsColor(channelNo: number): CubismTextureColor;
    setClippingMaskBufferSize(size: number): void;
    protected _clearedFrameBufferFlags: csmVector<boolean>;
    protected _channelColors: csmVector<CubismTextureColor>;
    protected _clippingContextListForMask: csmVector<T_ClippingContext>;
    protected _clippingContextListForDraw: csmVector<T_ClippingContext>;
    protected _clippingMaskBufferSize: number;
    protected _renderTextureCount: number;
    protected _tmpMatrix: CubismMatrix44;
    protected _tmpMatrixForMask: CubismMatrix44;
    protected _tmpMatrixForDraw: CubismMatrix44;
    protected _tmpBoundsOnModel: csmRect;
    protected _clippingContexttConstructor: ClippingContextConstructor<T_ClippingContext>;
}
