import { CubismIdHandle } from '../id/cubismid';
import { CubismModel } from '../model/cubismmodel';
import { csmVector } from '../type/csmvector';
import { ACubismMotion } from './acubismmotion';
import { CubismMotionQueueEntry } from './cubismmotionqueueentry';
export declare class CubismExpressionMotion extends ACubismMotion {
    static readonly DefaultAdditiveValue = 0;
    static readonly DefaultMultiplyValue = 1;
    static create(buffer: ArrayBuffer, size: number): CubismExpressionMotion;
    doUpdateParameters(model: CubismModel, userTimeSeconds: number, weight: number, motionQueueEntry: CubismMotionQueueEntry): void;
    calculateExpressionParameters(model: CubismModel, userTimeSeconds: number, motionQueueEntry: CubismMotionQueueEntry, expressionParameterValues: csmVector<ExpressionParameterValue>, expressionIndex: number, fadeWeight: number): void;
    getExpressionParameters(): csmVector<ExpressionParameter>;
    getFadeWeight(): number;
    protected parse(buffer: ArrayBuffer, size: number): void;
    calculateValue(source: number, destination: number, fadeWeight: number): number;
    protected constructor();
    private _parameters;
    private _fadeWeight;
}
export declare enum ExpressionBlendType {
    Additive = 0,
    Multiply = 1,
    Overwrite = 2
}
export declare class ExpressionParameter {
    parameterId: CubismIdHandle;
    blendType: ExpressionBlendType;
    value: number;
}
import * as $ from './cubismexpressionmotion';
import { ExpressionParameterValue } from './cubismexpressionmotionmanager';
export declare namespace Live2DCubismFramework {
    const CubismExpressionMotion: typeof $.CubismExpressionMotion;
    type CubismExpressionMotion = $.CubismExpressionMotion;
    const ExpressionBlendType: typeof $.ExpressionBlendType;
    type ExpressionBlendType = $.ExpressionBlendType;
    const ExpressionParameter: typeof $.ExpressionParameter;
    type ExpressionParameter = $.ExpressionParameter;
}
