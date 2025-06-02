import { CubismIdHandle } from '../id/cubismid';
import { CubismModel } from '../model/cubismmodel';
import { csmVector } from '../type/csmvector';
export declare class CubismBreath {
    static create(): CubismBreath;
    static delete(instance: CubismBreath): void;
    setParameters(breathParameters: csmVector<BreathParameterData>): void;
    getParameters(): csmVector<BreathParameterData>;
    updateParameters(model: CubismModel, deltaTimeSeconds: number): void;
    constructor();
    _breathParameters: csmVector<BreathParameterData>;
    _currentTime: number;
}
export declare class BreathParameterData {
    constructor(parameterId?: CubismIdHandle, offset?: number, peak?: number, cycle?: number, weight?: number);
    parameterId: CubismIdHandle;
    offset: number;
    peak: number;
    cycle: number;
    weight: number;
}
import * as $ from './cubismbreath';
export declare namespace Live2DCubismFramework {
    const BreathParameterData: typeof $.BreathParameterData;
    type BreathParameterData = $.BreathParameterData;
    const CubismBreath: typeof $.CubismBreath;
    type CubismBreath = $.CubismBreath;
}
