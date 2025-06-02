import { CubismIdHandle } from '../id/cubismid';
import { csmString } from '../type/csmstring';
import { csmVector } from '../type/csmvector';
export declare enum CubismMotionCurveTarget {
    CubismMotionCurveTarget_Model = 0,
    CubismMotionCurveTarget_Parameter = 1,
    CubismMotionCurveTarget_PartOpacity = 2
}
export declare enum CubismMotionSegmentType {
    CubismMotionSegmentType_Linear = 0,
    CubismMotionSegmentType_Bezier = 1,
    CubismMotionSegmentType_Stepped = 2,
    CubismMotionSegmentType_InverseStepped = 3
}
export declare class CubismMotionPoint {
    time: number;
    value: number;
}
export interface csmMotionSegmentEvaluationFunction {
    (points: CubismMotionPoint[], time: number): number;
}
export declare class CubismMotionSegment {
    constructor();
    evaluate: csmMotionSegmentEvaluationFunction;
    basePointIndex: number;
    segmentType: number;
}
export declare class CubismMotionCurve {
    constructor();
    type: CubismMotionCurveTarget;
    id: CubismIdHandle;
    segmentCount: number;
    baseSegmentIndex: number;
    fadeInTime: number;
    fadeOutTime: number;
}
export declare class CubismMotionEvent {
    fireTime: number;
    value: csmString;
}
export declare class CubismMotionData {
    constructor();
    duration: number;
    loop: boolean;
    curveCount: number;
    eventCount: number;
    fps: number;
    curves: csmVector<CubismMotionCurve>;
    segments: csmVector<CubismMotionSegment>;
    points: csmVector<CubismMotionPoint>;
    events: csmVector<CubismMotionEvent>;
}
import * as $ from './cubismmotioninternal';
export declare namespace Live2DCubismFramework {
    const CubismMotionCurve: typeof $.CubismMotionCurve;
    type CubismMotionCurve = $.CubismMotionCurve;
    const CubismMotionCurveTarget: typeof $.CubismMotionCurveTarget;
    type CubismMotionCurveTarget = $.CubismMotionCurveTarget;
    const CubismMotionData: typeof $.CubismMotionData;
    type CubismMotionData = $.CubismMotionData;
    const CubismMotionEvent: typeof $.CubismMotionEvent;
    type CubismMotionEvent = $.CubismMotionEvent;
    const CubismMotionPoint: typeof $.CubismMotionPoint;
    type CubismMotionPoint = $.CubismMotionPoint;
    const CubismMotionSegment: typeof $.CubismMotionSegment;
    type CubismMotionSegment = $.CubismMotionSegment;
    const CubismMotionSegmentType: typeof $.CubismMotionSegmentType;
    type CubismMotionSegmentType = $.CubismMotionSegmentType;
    type csmMotionSegmentEvaluationFunction = $.csmMotionSegmentEvaluationFunction;
}
