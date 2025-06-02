import { csmMap } from '../type/csmmap';
import { CubismMatrix44 } from './cubismmatrix44';
export declare class CubismModelMatrix extends CubismMatrix44 {
    constructor(w?: number, h?: number);
    setWidth(w: number): void;
    setHeight(h: number): void;
    setPosition(x: number, y: number): void;
    setCenterPosition(x: number, y: number): void;
    top(y: number): void;
    bottom(y: number): void;
    left(x: number): void;
    right(x: number): void;
    centerX(x: number): void;
    setX(x: number): void;
    centerY(y: number): void;
    setY(y: number): void;
    setupFromLayout(layout: csmMap<string, number>): void;
    private _width;
    private _height;
}
import * as $ from './cubismmodelmatrix';
export declare namespace Live2DCubismFramework {
    const CubismModelMatrix: typeof $.CubismModelMatrix;
    type CubismModelMatrix = $.CubismModelMatrix;
}
