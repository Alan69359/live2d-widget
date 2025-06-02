import { ICubismModelSetting } from '@framework/icubismmodelsetting';
import { CubismIdHandle } from '@framework/id/cubismid';
import { CubismMatrix44 } from '@framework/math/cubismmatrix44';
import { CubismUserModel } from '@framework/model/cubismusermodel';
import { ACubismMotion, BeganMotionCallback, FinishedMotionCallback } from '@framework/motion/acubismmotion';
import { CubismMotionQueueEntryHandle } from '@framework/motion/cubismmotionqueuemanager';
import { csmMap } from '@framework/type/csmmap';
import { csmRect } from '@framework/type/csmrectf';
import { csmString } from '@framework/type/csmstring';
import { csmVector } from '@framework/type/csmvector';
import { LAppWavFileHandler } from './lappwavfilehandler';
import { LAppSubdelegate } from './lappsubdelegate';
declare enum LoadStep {
    LoadAssets = 0,
    LoadModel = 1,
    WaitLoadModel = 2,
    LoadExpression = 3,
    WaitLoadExpression = 4,
    LoadPhysics = 5,
    WaitLoadPhysics = 6,
    LoadPose = 7,
    WaitLoadPose = 8,
    SetupEyeBlink = 9,
    SetupBreath = 10,
    LoadUserData = 11,
    WaitLoadUserData = 12,
    SetupEyeBlinkIds = 13,
    SetupLipSyncIds = 14,
    SetupLayout = 15,
    LoadMotion = 16,
    WaitLoadMotion = 17,
    CompleteInitialize = 18,
    CompleteSetupModel = 19,
    LoadTexture = 20,
    WaitLoadTexture = 21,
    CompleteSetup = 22
}
export declare class LAppModel extends CubismUserModel {
    loadAssets(dir: string, fileName: string): void;
    private setupModel;
    private setupTextures;
    reloadRenderer(): void;
    update(): void;
    startMotion(group: string, no: number, priority: number, onFinishedMotionHandler?: FinishedMotionCallback, onBeganMotionHandler?: BeganMotionCallback): CubismMotionQueueEntryHandle;
    startRandomMotion(group: string, priority: number, onFinishedMotionHandler?: FinishedMotionCallback, onBeganMotionHandler?: BeganMotionCallback): CubismMotionQueueEntryHandle;
    setExpression(expressionId: string): void;
    setRandomExpression(): void;
    motionEventFired(eventValue: csmString): void;
    hitTest(hitArenaName: string, x: number, y: number): boolean;
    preLoadMotionGroup(group: string): void;
    releaseMotions(): void;
    releaseExpressions(): void;
    doDraw(): void;
    draw(matrix: CubismMatrix44): void;
    hasMocConsistencyFromFile(): Promise<boolean>;
    setSubdelegate(subdelegate: LAppSubdelegate): void;
    constructor();
    private _subdelegate;
    _modelSetting: ICubismModelSetting;
    _modelHomeDir: string;
    _userTimeSeconds: number;
    _eyeBlinkIds: csmVector<CubismIdHandle>;
    _lipSyncIds: csmVector<CubismIdHandle>;
    _motions: csmMap<string, ACubismMotion>;
    _expressions: csmMap<string, ACubismMotion>;
    _hitArea: csmVector<csmRect>;
    _userArea: csmVector<csmRect>;
    _idParamAngleX: CubismIdHandle;
    _idParamAngleY: CubismIdHandle;
    _idParamAngleZ: CubismIdHandle;
    _idParamEyeBallX: CubismIdHandle;
    _idParamEyeBallY: CubismIdHandle;
    _idParamBodyAngleX: CubismIdHandle;
    _state: LoadStep;
    _expressionCount: number;
    _textureCount: number;
    _motionCount: number;
    _allMotionCount: number;
    _wavFileHandler: LAppWavFileHandler;
    _consistency: boolean;
}
export {};
