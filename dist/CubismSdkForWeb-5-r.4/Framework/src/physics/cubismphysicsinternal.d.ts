import { CubismIdHandle } from '../id/cubismid';
import { CubismVector2 } from '../math/cubismvector2';
import { csmVector } from '../type/csmvector';
export declare enum CubismPhysicsTargetType {
    CubismPhysicsTargetType_Parameter = 0
}
export declare enum CubismPhysicsSource {
    CubismPhysicsSource_X = 0,
    CubismPhysicsSource_Y = 1,
    CubismPhysicsSource_Angle = 2
}
export declare class PhysicsJsonEffectiveForces {
    constructor();
    gravity: CubismVector2;
    wind: CubismVector2;
}
export declare class CubismPhysicsParameter {
    id: CubismIdHandle;
    targetType: CubismPhysicsTargetType;
}
export declare class CubismPhysicsNormalization {
    minimum: number;
    maximum: number;
    defalut: number;
}
export declare class CubismPhysicsParticle {
    constructor();
    initialPosition: CubismVector2;
    mobility: number;
    delay: number;
    acceleration: number;
    radius: number;
    position: CubismVector2;
    lastPosition: CubismVector2;
    lastGravity: CubismVector2;
    force: CubismVector2;
    velocity: CubismVector2;
}
export declare class CubismPhysicsSubRig {
    constructor();
    inputCount: number;
    outputCount: number;
    particleCount: number;
    baseInputIndex: number;
    baseOutputIndex: number;
    baseParticleIndex: number;
    normalizationPosition: CubismPhysicsNormalization;
    normalizationAngle: CubismPhysicsNormalization;
}
export interface normalizedPhysicsParameterValueGetter {
    (targetTranslation: CubismVector2, targetAngle: {
        angle: number;
    }, value: number, parameterMinimunValue: number, parameterMaximumValue: number, parameterDefaultValue: number, normalizationPosition: CubismPhysicsNormalization, normalizationAngle: CubismPhysicsNormalization, isInverted: boolean, weight: number): void;
}
export interface physicsValueGetter {
    (translation: CubismVector2, particles: CubismPhysicsParticle[], particleIndex: number, isInverted: boolean, parentGravity: CubismVector2): number;
}
export interface physicsScaleGetter {
    (translationScale: CubismVector2, angleScale: number): number;
}
export declare class CubismPhysicsInput {
    constructor();
    source: CubismPhysicsParameter;
    sourceParameterIndex: number;
    weight: number;
    type: number;
    reflect: boolean;
    getNormalizedParameterValue: normalizedPhysicsParameterValueGetter;
}
export declare class CubismPhysicsOutput {
    constructor();
    destination: CubismPhysicsParameter;
    destinationParameterIndex: number;
    vertexIndex: number;
    translationScale: CubismVector2;
    angleScale: number;
    weight: number;
    type: CubismPhysicsSource;
    reflect: boolean;
    valueBelowMinimum: number;
    valueExceededMaximum: number;
    getValue: physicsValueGetter;
    getScale: physicsScaleGetter;
}
export declare class CubismPhysicsRig {
    constructor();
    subRigCount: number;
    settings: csmVector<CubismPhysicsSubRig>;
    inputs: csmVector<CubismPhysicsInput>;
    outputs: csmVector<CubismPhysicsOutput>;
    particles: csmVector<CubismPhysicsParticle>;
    gravity: CubismVector2;
    wind: CubismVector2;
    fps: number;
}
import * as $ from './cubismphysicsinternal';
export declare namespace Live2DCubismFramework {
    const CubismPhysicsInput: typeof $.CubismPhysicsInput;
    type CubismPhysicsInput = $.CubismPhysicsInput;
    const CubismPhysicsNormalization: typeof $.CubismPhysicsNormalization;
    type CubismPhysicsNormalization = $.CubismPhysicsNormalization;
    const CubismPhysicsOutput: typeof $.CubismPhysicsOutput;
    type CubismPhysicsOutput = $.CubismPhysicsOutput;
    const CubismPhysicsParameter: typeof $.CubismPhysicsParameter;
    type CubismPhysicsParameter = $.CubismPhysicsParameter;
    const CubismPhysicsParticle: typeof $.CubismPhysicsParticle;
    type CubismPhysicsParticle = $.CubismPhysicsParticle;
    const CubismPhysicsRig: typeof $.CubismPhysicsRig;
    type CubismPhysicsRig = $.CubismPhysicsRig;
    const CubismPhysicsSource: typeof $.CubismPhysicsSource;
    type CubismPhysicsSource = $.CubismPhysicsSource;
    const CubismPhysicsSubRig: typeof $.CubismPhysicsSubRig;
    type CubismPhysicsSubRig = $.CubismPhysicsSubRig;
    const CubismPhysicsTargetType: typeof $.CubismPhysicsTargetType;
    type CubismPhysicsTargetType = $.CubismPhysicsTargetType;
    const PhysicsJsonEffectiveForces: typeof $.PhysicsJsonEffectiveForces;
    type PhysicsJsonEffectiveForces = $.PhysicsJsonEffectiveForces;
    type normalizedPhysicsParameterValueGetter = $.normalizedPhysicsParameterValueGetter;
    type physicsScaleGetter = $.physicsScaleGetter;
    type physicsValueGetter = $.physicsValueGetter;
}
