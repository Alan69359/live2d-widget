import { csmString } from '../type/csmstring';
export declare class CubismId {
    static createIdInternal(id: string | csmString): CubismId;
    getString(): csmString;
    isEqual(c: string | csmString | CubismId): boolean;
    isNotEqual(c: string | csmString | CubismId): boolean;
    private constructor();
    private _id;
}
export declare type CubismIdHandle = CubismId;
import * as $ from './cubismid';
export declare namespace Live2DCubismFramework {
    const CubismId: typeof $.CubismId;
    type CubismId = $.CubismId;
    type CubismIdHandle = $.CubismIdHandle;
}
