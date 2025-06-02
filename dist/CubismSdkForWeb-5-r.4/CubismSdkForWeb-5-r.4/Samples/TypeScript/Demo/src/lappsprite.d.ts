import { LAppSubdelegate } from './lappsubdelegate';
export declare class LAppSprite {
    constructor(x: number, y: number, width: number, height: number, textureId: WebGLTexture);
    release(): void;
    getTexture(): WebGLTexture;
    render(programId: WebGLProgram): void;
    isHit(pointX: number, pointY: number): boolean;
    setSubdelegate(subdelegate: LAppSubdelegate): void;
    _texture: WebGLTexture;
    _vertexBuffer: WebGLBuffer;
    _uvBuffer: WebGLBuffer;
    _indexBuffer: WebGLBuffer;
    _rect: Rect;
    _positionLocation: number;
    _uvLocation: number;
    _textureLocation: WebGLUniformLocation;
    _positionArray: Float32Array;
    _uvArray: Float32Array;
    _indexArray: Uint16Array;
    _firstDraw: boolean;
    private _subdelegate;
}
export declare class Rect {
    left: number;
    right: number;
    up: number;
    down: number;
}
