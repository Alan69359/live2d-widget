export declare class LAppPal {
    static loadFileAsBytes(filePath: string, callback: (arrayBuffer: ArrayBuffer, size: number) => void): void;
    static getDeltaTime(): number;
    static updateTime(): void;
    static printMessage(message: string): void;
    static lastUpdate: number;
    static currentFrame: number;
    static lastFrame: number;
    static deltaTime: number;
}
