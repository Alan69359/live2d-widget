import { CubismModel } from '../model/cubismmodel';
import { csmMap } from '../type/csmmap';
import { csmVector } from '../type/csmvector';
import { CubismClippingManager } from './cubismclippingmanager';
import { CubismClippingContext, CubismRenderer } from './cubismrenderer';
export declare class CubismClippingManager_WebGL extends CubismClippingManager<CubismClippingContext_WebGL> {
    getMaskRenderTexture(): csmVector<WebGLFramebuffer>;
    setGL(gl: WebGLRenderingContext): void;
    constructor();
    setupClippingContext(model: CubismModel, renderer: CubismRenderer_WebGL): void;
    getColorBuffer(): csmVector<WebGLTexture>;
    getClippingMaskCount(): number;
    _currentMaskRenderTexture: WebGLFramebuffer;
    _maskRenderTextures: csmVector<WebGLFramebuffer>;
    _maskColorBuffers: csmVector<WebGLTexture>;
    _currentFrameNo: number;
    _maskTexture: CubismRenderTextureResource;
    gl: WebGLRenderingContext;
}
export declare class CubismRenderTextureResource {
    constructor(frameNo: number, texture: csmVector<WebGLFramebuffer>);
    frameNo: number;
    textures: csmVector<WebGLFramebuffer>;
}
export declare class CubismClippingContext_WebGL extends CubismClippingContext {
    constructor(manager: CubismClippingManager_WebGL, clippingDrawableIndices: Int32Array, clipCount: number);
    getClippingManager(): CubismClippingManager_WebGL;
    setGl(gl: WebGLRenderingContext): void;
    private _owner;
}
export declare class CubismRendererProfile_WebGL {
    private setGlEnable;
    private setGlEnableVertexAttribArray;
    save(): void;
    restore(): void;
    setGl(gl: WebGLRenderingContext): void;
    constructor();
    private _lastArrayBufferBinding;
    private _lastElementArrayBufferBinding;
    private _lastProgram;
    private _lastActiveTexture;
    private _lastTexture0Binding2D;
    private _lastTexture1Binding2D;
    private _lastVertexAttribArrayEnabled;
    private _lastScissorTest;
    private _lastBlend;
    private _lastStencilTest;
    private _lastDepthTest;
    private _lastCullFace;
    private _lastFrontFace;
    private _lastColorMask;
    private _lastBlending;
    private _lastFBO;
    private _lastViewport;
    gl: WebGLRenderingContext;
}
export declare class CubismRenderer_WebGL extends CubismRenderer {
    initialize(model: CubismModel, maskBufferCount?: number): void;
    bindTexture(modelTextureNo: number, glTexture: WebGLTexture): void;
    getBindedTextures(): csmMap<number, WebGLTexture>;
    setClippingMaskBufferSize(size: number): void;
    getClippingMaskBufferSize(): number;
    getRenderTextureCount(): number;
    constructor();
    release(): void;
    doDrawModel(): void;
    drawMeshWebGL(model: Readonly<CubismModel>, index: number): void;
    protected saveProfile(): void;
    protected restoreProfile(): void;
    static doStaticRelease(): void;
    setRenderState(fbo: WebGLFramebuffer, viewport: number[]): void;
    preDraw(): void;
    setClippingContextBufferForMask(clip: CubismClippingContext_WebGL): void;
    getClippingContextBufferForMask(): CubismClippingContext_WebGL;
    setClippingContextBufferForDraw(clip: CubismClippingContext_WebGL): void;
    getClippingContextBufferForDraw(): CubismClippingContext_WebGL;
    isGeneratingMask(): boolean;
    startUp(gl: WebGLRenderingContext): void;
    _textures: csmMap<number, WebGLTexture>;
    _sortedDrawableIndexList: csmVector<number>;
    _clippingManager: CubismClippingManager_WebGL;
    _clippingContextBufferForMask: CubismClippingContext_WebGL;
    _clippingContextBufferForDraw: CubismClippingContext_WebGL;
    _rendererProfile: CubismRendererProfile_WebGL;
    firstDraw: boolean;
    _bufferData: {
        vertex: WebGLBuffer;
        uv: WebGLBuffer;
        index: WebGLBuffer;
    };
    _extension: any;
    gl: WebGLRenderingContext;
}
import * as $ from './cubismrenderer_webgl';
export declare namespace Live2DCubismFramework {
    const CubismClippingContext: typeof CubismClippingContext_WebGL;
    type CubismClippingContext = $.CubismClippingContext_WebGL;
    const CubismClippingManager_WebGL: typeof $.CubismClippingManager_WebGL;
    type CubismClippingManager_WebGL = $.CubismClippingManager_WebGL;
    const CubismRenderTextureResource: typeof $.CubismRenderTextureResource;
    type CubismRenderTextureResource = $.CubismRenderTextureResource;
    const CubismRenderer_WebGL: typeof $.CubismRenderer_WebGL;
    type CubismRenderer_WebGL = $.CubismRenderer_WebGL;
}
