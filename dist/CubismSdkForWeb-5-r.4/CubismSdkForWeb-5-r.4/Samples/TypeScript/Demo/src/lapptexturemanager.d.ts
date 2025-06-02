import { csmVector } from '@framework/type/csmvector';
import { LAppGlManager } from './lappglmanager';
export declare class LAppTextureManager {
    constructor();
    release(): void;
    createTextureFromPngFile(fileName: string, usePremultiply: boolean, callback: (textureInfo: TextureInfo) => void): void;
    releaseTextures(): void;
    releaseTextureByTexture(texture: WebGLTexture): void;
    releaseTextureByFilePath(fileName: string): void;
    setGlManager(glManager: LAppGlManager): void;
    _textures: csmVector<TextureInfo>;
    private _glManager;
}
export declare class TextureInfo {
    img: HTMLImageElement;
    id: WebGLTexture;
    width: number;
    height: number;
    usePremultply: boolean;
    fileName: string;
}
