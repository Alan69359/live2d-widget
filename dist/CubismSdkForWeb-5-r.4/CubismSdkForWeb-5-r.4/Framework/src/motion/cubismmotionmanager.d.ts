import { CubismModel } from '../model/cubismmodel';
import { ACubismMotion } from './acubismmotion';
import { CubismMotionQueueEntryHandle, CubismMotionQueueManager } from './cubismmotionqueuemanager';
export declare class CubismMotionManager extends CubismMotionQueueManager {
    constructor();
    getCurrentPriority(): number;
    getReservePriority(): number;
    setReservePriority(val: number): void;
    startMotionPriority(motion: ACubismMotion, autoDelete: boolean, priority: number): CubismMotionQueueEntryHandle;
    updateMotion(model: CubismModel, deltaTimeSeconds: number): boolean;
    reserveMotion(priority: number): boolean;
    _currentPriority: number;
    _reservePriority: number;
}
import * as $ from './cubismmotionmanager';
export declare namespace Live2DCubismFramework {
    const CubismMotionManager: typeof $.CubismMotionManager;
    type CubismMotionManager = $.CubismMotionManager;
}
