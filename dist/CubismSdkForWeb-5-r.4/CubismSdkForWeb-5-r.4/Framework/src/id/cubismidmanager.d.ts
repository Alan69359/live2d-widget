import { csmString } from '../type/csmstring';
import { CubismId } from './cubismid';
export declare class CubismIdManager {
    constructor();
    release(): void;
    registerIds(ids: string[] | csmString[]): void;
    registerId(id: string | csmString): CubismId;
    getId(id: csmString | string): CubismId;
    isExist(id: csmString | string): boolean;
    private findId;
    private _ids;
}
import * as $ from './cubismidmanager';
export declare namespace Live2DCubismFramework {
    const CubismIdManager: typeof $.CubismIdManager;
    type CubismIdManager = $.CubismIdManager;
}
