import { ACubismMotion } from './acubismmotion';
import { CubismMotionQueueEntry } from './cubismmotionqueueentry';
import { csmVector } from '../type/csmvector';
import { CubismModel } from '../model/cubismmodel';
import { csmString } from '../type/csmstring';
export declare class CubismMotionQueueManager {
    constructor();
    release(): void;
    startMotion(motion: ACubismMotion, autoDelete: boolean, userTimeSeconds?: number): CubismMotionQueueEntryHandle;
    isFinished(): boolean;
    isFinishedByHandle(motionQueueEntryNumber: CubismMotionQueueEntryHandle): boolean;
    stopAllMotions(): void;
    getCubismMotionQueueEntries(): csmVector<CubismMotionQueueEntry>;
    getCubismMotionQueueEntry(motionQueueEntryNumber: any): CubismMotionQueueEntry;
    setEventCallback(callback: CubismMotionEventFunction, customData?: any): void;
    doUpdateMotion(model: CubismModel, userTimeSeconds: number): boolean;
    _userTimeSeconds: number;
    _motions: csmVector<CubismMotionQueueEntry>;
    _eventCallBack: CubismMotionEventFunction;
    _eventCustomData: any;
}
export interface CubismMotionEventFunction {
    (caller: CubismMotionQueueManager, eventValue: csmString, customData: any): void;
}
export declare type CubismMotionQueueEntryHandle = any;
export declare const InvalidMotionQueueEntryHandleValue: CubismMotionQueueEntryHandle;
import * as $ from './cubismmotionqueuemanager';
export declare namespace Live2DCubismFramework {
    const CubismMotionQueueManager: typeof $.CubismMotionQueueManager;
    type CubismMotionQueueManager = $.CubismMotionQueueManager;
    const InvalidMotionQueueEntryHandleValue: any;
    type CubismMotionQueueEntryHandle = $.CubismMotionQueueEntryHandle;
    type CubismMotionEventFunction = $.CubismMotionEventFunction;
}
