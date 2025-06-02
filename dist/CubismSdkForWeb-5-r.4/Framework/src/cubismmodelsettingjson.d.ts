import { ICubismModelSetting } from './icubismmodelsetting';
import { CubismIdHandle } from './id/cubismid';
import { csmMap } from './type/csmmap';
import { csmVector } from './type/csmvector';
import { CubismJson, Value } from './utils/cubismjson';
export declare enum FrequestNode {
    FrequestNode_Groups = 0,
    FrequestNode_Moc = 1,
    FrequestNode_Motions = 2,
    FrequestNode_Expressions = 3,
    FrequestNode_Textures = 4,
    FrequestNode_Physics = 5,
    FrequestNode_Pose = 6,
    FrequestNode_HitAreas = 7
}
export declare class CubismModelSettingJson extends ICubismModelSetting {
    constructor(buffer: ArrayBuffer, size: number);
    release(): void;
    getJson(): CubismJson;
    getModelFileName(): string;
    getTextureCount(): number;
    getTextureDirectory(): string;
    getTextureFileName(index: number): string;
    getHitAreasCount(): number;
    getHitAreaId(index: number): CubismIdHandle;
    getHitAreaName(index: number): string;
    getPhysicsFileName(): string;
    getPoseFileName(): string;
    getExpressionCount(): number;
    getExpressionName(index: number): string;
    getExpressionFileName(index: number): string;
    getMotionGroupCount(): number;
    getMotionGroupName(index: number): string;
    getMotionCount(groupName: string): number;
    getMotionFileName(groupName: string, index: number): string;
    getMotionSoundFileName(groupName: string, index: number): string;
    getMotionFadeInTimeValue(groupName: string, index: number): number;
    getMotionFadeOutTimeValue(groupName: string, index: number): number;
    getUserDataFile(): string;
    getLayoutMap(outLayoutMap: csmMap<string, number>): boolean;
    getEyeBlinkParameterCount(): number;
    getEyeBlinkParameterId(index: number): CubismIdHandle;
    getLipSyncParameterCount(): number;
    getLipSyncParameterId(index: number): CubismIdHandle;
    protected isExistModelFile(): boolean;
    protected isExistTextureFiles(): boolean;
    protected isExistHitAreas(): boolean;
    protected isExistPhysicsFile(): boolean;
    protected isExistPoseFile(): boolean;
    protected isExistExpressionFile(): boolean;
    protected isExistMotionGroups(): boolean;
    protected isExistMotionGroupName(groupName: string): boolean;
    protected isExistMotionSoundFile(groupName: string, index: number): boolean;
    protected isExistMotionFadeIn(groupName: string, index: number): boolean;
    protected isExistMotionFadeOut(groupName: string, index: number): boolean;
    protected isExistUserDataFile(): boolean;
    protected isExistEyeBlinkParameters(): boolean;
    protected isExistLipSyncParameters(): boolean;
    protected _json: CubismJson;
    protected _jsonValue: csmVector<Value>;
    protected readonly version = "Version";
    protected readonly fileReferences = "FileReferences";
    protected readonly groups = "Groups";
    protected readonly layout = "Layout";
    protected readonly hitAreas = "HitAreas";
    protected readonly moc = "Moc";
    protected readonly textures = "Textures";
    protected readonly physics = "Physics";
    protected readonly pose = "Pose";
    protected readonly expressions = "Expressions";
    protected readonly motions = "Motions";
    protected readonly userData = "UserData";
    protected readonly name = "Name";
    protected readonly filePath = "File";
    protected readonly id = "Id";
    protected readonly ids = "Ids";
    protected readonly target = "Target";
    protected readonly idle = "Idle";
    protected readonly tapBody = "TapBody";
    protected readonly pinchIn = "PinchIn";
    protected readonly pinchOut = "PinchOut";
    protected readonly shake = "Shake";
    protected readonly flickHead = "FlickHead";
    protected readonly parameter = "Parameter";
    protected readonly soundPath = "Sound";
    protected readonly fadeInTime = "FadeInTime";
    protected readonly fadeOutTime = "FadeOutTime";
    protected readonly centerX = "CenterX";
    protected readonly centerY = "CenterY";
    protected readonly x = "X";
    protected readonly y = "Y";
    protected readonly width = "Width";
    protected readonly height = "Height";
    protected readonly lipSync = "LipSync";
    protected readonly eyeBlink = "EyeBlink";
    protected readonly initParameter = "init_param";
    protected readonly initPartsVisible = "init_parts_visible";
    protected readonly val = "val";
}
import * as $ from './cubismmodelsettingjson';
export declare namespace Live2DCubismFramework {
    const CubismModelSettingJson: typeof $.CubismModelSettingJson;
    type CubismModelSettingJson = $.CubismModelSettingJson;
    const FrequestNode: typeof $.FrequestNode;
    type FrequestNode = $.FrequestNode;
}
