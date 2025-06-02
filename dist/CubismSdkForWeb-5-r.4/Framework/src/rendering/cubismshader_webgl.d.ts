import { CubismModel } from '../model/cubismmodel';
import { csmVector } from '../type/csmvector';
import { CubismRenderer_WebGL } from './cubismrenderer_webgl';
export declare class CubismShader_WebGL {
    constructor();
    release(): void;
    setupShaderProgramForDraw(renderer: CubismRenderer_WebGL, model: Readonly<CubismModel>, index: number): void;
    setupShaderProgramForMask(renderer: CubismRenderer_WebGL, model: Readonly<CubismModel>, index: number): void;
    releaseShaderProgram(): void;
    generateShaders(): void;
    loadShaderProgram(vertexShaderSource: string, fragmentShaderSource: string): WebGLProgram;
    compileShaderSource(shaderType: GLenum, shaderSource: string): WebGLProgram;
    setGl(gl: WebGLRenderingContext): void;
    _shaderSets: csmVector<CubismShaderSet>;
    gl: WebGLRenderingContext;
}
export declare class CubismShaderManager_WebGL {
    static getInstance(): CubismShaderManager_WebGL;
    static deleteInstance(): void;
    private constructor();
    release(): void;
    getShader(gl: WebGLRenderingContext): CubismShader_WebGL;
    setGlContext(gl: WebGLRenderingContext): void;
    private _shaderMap;
}
export declare class CubismShaderSet {
    shaderProgram: WebGLProgram;
    attributePositionLocation: GLuint;
    attributeTexCoordLocation: GLuint;
    uniformMatrixLocation: WebGLUniformLocation;
    uniformClipMatrixLocation: WebGLUniformLocation;
    samplerTexture0Location: WebGLUniformLocation;
    samplerTexture1Location: WebGLUniformLocation;
    uniformBaseColorLocation: WebGLUniformLocation;
    uniformChannelFlagLocation: WebGLUniformLocation;
    uniformMultiplyColorLocation: WebGLUniformLocation;
    uniformScreenColorLocation: WebGLUniformLocation;
}
export declare enum ShaderNames {
    ShaderNames_SetupMask = 0,
    ShaderNames_NormalPremultipliedAlpha = 1,
    ShaderNames_NormalMaskedPremultipliedAlpha = 2,
    ShaderNames_NomralMaskedInvertedPremultipliedAlpha = 3,
    ShaderNames_AddPremultipliedAlpha = 4,
    ShaderNames_AddMaskedPremultipliedAlpha = 5,
    ShaderNames_AddMaskedPremultipliedAlphaInverted = 6,
    ShaderNames_MultPremultipliedAlpha = 7,
    ShaderNames_MultMaskedPremultipliedAlpha = 8,
    ShaderNames_MultMaskedPremultipliedAlphaInverted = 9
}
export declare const vertexShaderSrcSetupMask: string;
export declare const fragmentShaderSrcsetupMask: string;
export declare const vertexShaderSrc: string;
export declare const vertexShaderSrcMasked: string;
export declare const fragmentShaderSrcPremultipliedAlpha: string;
export declare const fragmentShaderSrcMaskPremultipliedAlpha: string;
export declare const fragmentShaderSrcMaskInvertedPremultipliedAlpha: string;
import * as $ from './cubismshader_webgl';
export declare namespace Live2DCubismFramework {
    const CubismShaderSet: typeof $.CubismShaderSet;
    type CubismShaderSet = $.CubismShaderSet;
    const CubismShader_WebGL: typeof $.CubismShader_WebGL;
    type CubismShader_WebGL = $.CubismShader_WebGL;
    const CubismShaderManager_WebGL: typeof $.CubismShaderManager_WebGL;
    type CubismShaderManager_WebGL = $.CubismShaderManager_WebGL;
    const ShaderNames: typeof $.ShaderNames;
    type ShaderNames = $.ShaderNames;
}
