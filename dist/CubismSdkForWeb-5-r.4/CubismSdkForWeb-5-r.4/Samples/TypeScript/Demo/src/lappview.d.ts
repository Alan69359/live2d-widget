import { CubismMatrix44 } from '@framework/math/cubismmatrix44';
import { CubismViewMatrix } from '@framework/math/cubismviewmatrix';
import { LAppSprite } from './lappsprite';
import { TouchManager } from './touchmanager';
import { LAppSubdelegate } from './lappsubdelegate';
export declare class LAppView {
    constructor();
    initialize(subdelegate: LAppSubdelegate): void;
    release(): void;
    render(): void;
    initializeSprite(): void;
    onTouchesBegan(pointX: number, pointY: number): void;
    onTouchesMoved(pointX: number, pointY: number): void;
    onTouchesEnded(pointX: number, pointY: number): void;
    transformViewX(deviceX: number): number;
    transformViewY(deviceY: number): number;
    transformScreenX(deviceX: number): number;
    transformScreenY(deviceY: number): number;
    _touchManager: TouchManager;
    _deviceToScreen: CubismMatrix44;
    _viewMatrix: CubismViewMatrix;
    _programId: WebGLProgram;
    _back: LAppSprite;
    _gear: LAppSprite;
    _changeModel: boolean;
    _isClick: boolean;
    private _subdelegate;
}
