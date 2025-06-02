import { CubismVector2 } from '../math/cubismvector2';
import { csmVector } from '../type/csmvector';
import { CubismModel } from '../model/cubismmodel';
import { CubismPhysicsRig } from './cubismphysicsinternal';
export declare class CubismPhysics {
    static create(buffer: ArrayBuffer, size: number): CubismPhysics;
    static delete(physics: CubismPhysics): void;
    parse(physicsJson: ArrayBuffer, size: number): void;
    stabilization(model: CubismModel): void;
    evaluate(model: CubismModel, deltaTimeSeconds: number): void;
    interpolate(model: CubismModel, weight: number): void;
    setOptions(options: Options): void;
    getOption(): Options;
    constructor();
    release(): void;
    initialize(): void;
    _physicsRig: CubismPhysicsRig;
    _options: Options;
    _currentRigOutputs: csmVector<PhysicsOutput>;
    _previousRigOutputs: csmVector<PhysicsOutput>;
    _currentRemainTime: number;
    _parameterCaches: Float32Array;
    _parameterInputCaches: Float32Array;
}
export declare class Options {
    constructor();
    gravity: CubismVector2;
    wind: CubismVector2;
}
export declare class PhysicsOutput {
    constructor();
    outputs: csmVector<number>;
}
import * as $ from './cubismphysics';
export declare namespace Live2DCubismFramework {
    const CubismPhysics: typeof $.CubismPhysics;
    type CubismPhysics = $.CubismPhysics;
    const Options: typeof $.Options;
    type Options = $.Options;
}
