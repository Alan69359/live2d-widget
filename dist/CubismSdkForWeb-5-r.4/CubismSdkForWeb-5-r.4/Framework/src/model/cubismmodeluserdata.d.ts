import { CubismIdHandle } from '../id/cubismid';
import { csmString } from '../type/csmstring';
import { csmVector } from '../type/csmvector';
export declare class CubismModelUserDataNode {
    targetType: CubismIdHandle;
    targetId: CubismIdHandle;
    value: csmString;
}
export declare class CubismModelUserData {
    static create(buffer: ArrayBuffer, size: number): CubismModelUserData;
    static delete(modelUserData: CubismModelUserData): void;
    getArtMeshUserDatas(): csmVector<CubismModelUserDataNode>;
    parseUserData(buffer: ArrayBuffer, size: number): void;
    constructor();
    release(): void;
    private _userDataNodes;
    private _artMeshUserDataNode;
}
import * as $ from './cubismmodeluserdata';
export declare namespace Live2DCubismFramework {
    const CubismModelUserData: typeof $.CubismModelUserData;
    type CubismModelUserData = $.CubismModelUserData;
    const CubismModelUserDataNode: typeof $.CubismModelUserDataNode;
    type CubismModelUserDataNode = $.CubismModelUserDataNode;
}
