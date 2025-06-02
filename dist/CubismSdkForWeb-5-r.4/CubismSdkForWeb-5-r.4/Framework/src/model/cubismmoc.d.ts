import { CubismModel } from './cubismmodel';
export declare class CubismMoc {
    static create(mocBytes: ArrayBuffer, shouldCheckMocConsistency: boolean): CubismMoc;
    static delete(moc: CubismMoc): void;
    createModel(): CubismModel;
    deleteModel(model: CubismModel): void;
    private constructor();
    release(): void;
    getLatestMocVersion(): number;
    getMocVersion(): number;
    static hasMocConsistency(mocBytes: ArrayBuffer): boolean;
    _moc: Live2DCubismCore.Moc;
    _modelCount: number;
    _mocVersion: number;
}
import * as $ from './cubismmoc';
export declare namespace Live2DCubismFramework {
    const CubismMoc: typeof $.CubismMoc;
    type CubismMoc = $.CubismMoc;
}
