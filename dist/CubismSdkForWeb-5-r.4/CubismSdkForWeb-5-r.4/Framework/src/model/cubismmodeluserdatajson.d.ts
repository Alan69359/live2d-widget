import { CubismIdHandle } from '../id/cubismid';
export declare class CubismModelUserDataJson {
    constructor(buffer: ArrayBuffer, size: number);
    release(): void;
    getUserDataCount(): number;
    getTotalUserDataSize(): number;
    getUserDataTargetType(i: number): string;
    getUserDataId(i: number): CubismIdHandle;
    getUserDataValue(i: number): string;
    private _json;
}
import * as $ from './cubismmodeluserdatajson';
export declare namespace Live2DCubismFramework {
    const CubismModelUserDataJson: typeof $.CubismModelUserDataJson;
    type CubismModelUserDataJson = $.CubismModelUserDataJson;
}
