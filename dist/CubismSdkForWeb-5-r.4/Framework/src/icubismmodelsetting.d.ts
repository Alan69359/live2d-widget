import { CubismIdHandle } from './id/cubismid';
import { csmMap } from './type/csmmap';
export declare abstract class ICubismModelSetting {
    abstract getModelFileName(): string;
    abstract getTextureCount(): number;
    abstract getTextureDirectory(): string;
    abstract getTextureFileName(index: number): string;
    abstract getHitAreasCount(): number;
    abstract getHitAreaId(index: number): CubismIdHandle;
    abstract getHitAreaName(index: number): string;
    abstract getPhysicsFileName(): string;
    abstract getPoseFileName(): string;
    abstract getExpressionCount(): number;
    abstract getExpressionName(index: number): string;
    abstract getExpressionFileName(index: number): string;
    abstract getMotionGroupCount(): number;
    abstract getMotionGroupName(index: number): string;
    abstract getMotionCount(groupName: string): number;
    abstract getMotionFileName(groupName: string, index: number): string;
    abstract getMotionSoundFileName(groupName: string, index: number): string;
    abstract getMotionFadeInTimeValue(groupName: string, index: number): number;
    abstract getMotionFadeOutTimeValue(groupName: string, index: number): number;
    abstract getUserDataFile(): string;
    abstract getLayoutMap(outLayoutMap: csmMap<string, number>): boolean;
    abstract getEyeBlinkParameterCount(): number;
    abstract getEyeBlinkParameterId(index: number): CubismIdHandle;
    abstract getLipSyncParameterCount(): number;
    abstract getLipSyncParameterId(index: number): CubismIdHandle;
}
import * as $ from './icubismmodelsetting';
export declare namespace Live2DCubismFramework {
    const ICubismModelSetting: typeof $.ICubismModelSetting;
    type ICubismModelSetting = $.ICubismModelSetting;
}
