import { ACubismMotion } from './acubismmotion';
import { CubismMotionQueueEntryHandle } from './cubismmotionqueuemanager';
export declare class CubismMotionQueueEntry {
    constructor();
    release(): void;
    setFadeOut(fadeOutSeconds: number): void;
    startFadeOut(fadeOutSeconds: number, userTimeSeconds: number): void;
    isFinished(): boolean;
    isStarted(): boolean;
    getStartTime(): number;
    getFadeInStartTime(): number;
    getEndTime(): number;
    setStartTime(startTime: number): void;
    setFadeInStartTime(startTime: number): void;
    setEndTime(endTime: number): void;
    setIsFinished(f: boolean): void;
    setIsStarted(f: boolean): void;
    isAvailable(): boolean;
    setIsAvailable(v: boolean): void;
    setState(timeSeconds: number, weight: number): void;
    getStateTime(): number;
    getStateWeight(): number;
    getLastCheckEventSeconds(): number;
    setLastCheckEventSeconds(checkSeconds: number): void;
    isTriggeredFadeOut(): boolean;
    getFadeOutSeconds(): number;
    getCubismMotion(): ACubismMotion;
    _autoDelete: boolean;
    _motion: ACubismMotion;
    _available: boolean;
    _finished: boolean;
    _started: boolean;
    _startTimeSeconds: number;
    _fadeInStartTimeSeconds: number;
    _endTimeSeconds: number;
    _stateTimeSeconds: number;
    _stateWeight: number;
    _lastEventCheckSeconds: number;
    private _fadeOutSeconds;
    private _isTriggeredFadeOut;
    _motionQueueEntryHandle: CubismMotionQueueEntryHandle;
}
import * as $ from './cubismmotionqueueentry';
export declare namespace Live2DCubismFramework {
    const CubismMotionQueueEntry: typeof $.CubismMotionQueueEntry;
    type CubismMotionQueueEntry = $.CubismMotionQueueEntry;
}
