import { ICubismModelSetting } from '../icubismmodelsetting';
import { CubismIdHandle } from '../id/cubismid';
import { CubismModel } from '../model/cubismmodel';
import { csmVector } from '../type/csmvector';
export declare class CubismEyeBlink {
    static create(modelSetting?: ICubismModelSetting): CubismEyeBlink;
    static delete(eyeBlink: CubismEyeBlink): void;
    setBlinkingInterval(blinkingInterval: number): void;
    setBlinkingSetting(closing: number, closed: number, opening: number): void;
    setParameterIds(parameterIds: csmVector<CubismIdHandle>): void;
    getParameterIds(): csmVector<CubismIdHandle>;
    updateParameters(model: CubismModel, deltaTimeSeconds: number): void;
    constructor(modelSetting: ICubismModelSetting);
    determinNextBlinkingTiming(): number;
    _blinkingState: number;
    _parameterIds: csmVector<CubismIdHandle>;
    _nextBlinkingTime: number;
    _stateStartTimeSeconds: number;
    _blinkingIntervalSeconds: number;
    _closingSeconds: number;
    _closedSeconds: number;
    _openingSeconds: number;
    _userTimeSeconds: number;
    static readonly CloseIfZero: boolean;
}
export declare enum EyeState {
    EyeState_First = 0,
    EyeState_Interval = 1,
    EyeState_Closing = 2,
    EyeState_Closed = 3,
    EyeState_Opening = 4
}
import * as $ from './cubismeyeblink';
export declare namespace Live2DCubismFramework {
    const CubismEyeBlink: typeof $.CubismEyeBlink;
    type CubismEyeBlink = $.CubismEyeBlink;
    const EyeState: typeof $.EyeState;
    type EyeState = $.EyeState;
}
