import { CubismIdHandle } from '../id/cubismid';
import { csmString } from '../type/csmstring';
import { CubismJson } from '../utils/cubismjson';
export declare class CubismMotionJson {
    constructor(buffer: ArrayBuffer, size: number);
    release(): void;
    getMotionDuration(): number;
    isMotionLoop(): boolean;
    hasConsistency(): boolean;
    getEvaluationOptionFlag(flagType: EvaluationOptionFlag): boolean;
    getMotionCurveCount(): number;
    getMotionFps(): number;
    getMotionTotalSegmentCount(): number;
    getMotionTotalPointCount(): number;
    isExistMotionFadeInTime(): boolean;
    isExistMotionFadeOutTime(): boolean;
    getMotionFadeInTime(): number;
    getMotionFadeOutTime(): number;
    getMotionCurveTarget(curveIndex: number): string;
    getMotionCurveId(curveIndex: number): CubismIdHandle;
    isExistMotionCurveFadeInTime(curveIndex: number): boolean;
    isExistMotionCurveFadeOutTime(curveIndex: number): boolean;
    getMotionCurveFadeInTime(curveIndex: number): number;
    getMotionCurveFadeOutTime(curveIndex: number): number;
    getMotionCurveSegmentCount(curveIndex: number): number;
    getMotionCurveSegment(curveIndex: number, segmentIndex: number): number;
    getEventCount(): number;
    getTotalEventValueSize(): number;
    getEventTime(userDataIndex: number): number;
    getEventValue(userDataIndex: number): csmString;
    _json: CubismJson;
}
export declare enum EvaluationOptionFlag {
    EvaluationOptionFlag_AreBeziersRistricted = 0
}
import * as $ from './cubismmotionjson';
export declare namespace Live2DCubismFramework {
    const CubismMotionJson: typeof $.CubismMotionJson;
    type CubismMotionJson = $.CubismMotionJson;
}
