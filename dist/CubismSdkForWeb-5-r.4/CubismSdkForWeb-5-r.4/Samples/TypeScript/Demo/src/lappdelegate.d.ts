export declare let s_instance: LAppDelegate;
export declare class LAppDelegate {
    static getInstance(): LAppDelegate;
    static releaseInstance(): void;
    private onPointerBegan;
    private onPointerMoved;
    private onPointerEnded;
    private onPointerCancel;
    onResize(): void;
    run(): void;
    private release;
    private releaseEventListener;
    private releaseSubdelegates;
    initialize(): boolean;
    private initializeEventListener;
    private initializeCubism;
    private initializeSubdelegates;
    private constructor();
    private _cubismOption;
    private _canvases;
    private _subdelegates;
    private pointBeganEventListener;
    private pointMovedEventListener;
    private pointEndedEventListener;
    private pointCancelEventListener;
}
