export declare class CubismTargetPoint {
    constructor();
    update(deltaTimeSeconds: number): void;
    getX(): number;
    getY(): number;
    set(x: number, y: number): void;
    private _faceTargetX;
    private _faceTargetY;
    private _faceX;
    private _faceY;
    private _faceVX;
    private _faceVY;
    private _lastTimeSeconds;
    private _userTimeSeconds;
}
import * as $ from './cubismtargetpoint';
export declare namespace Live2DCubismFramework {
    const CubismTargetPoint: typeof $.CubismTargetPoint;
    type CubismTargetPoint = $.CubismTargetPoint;
}
