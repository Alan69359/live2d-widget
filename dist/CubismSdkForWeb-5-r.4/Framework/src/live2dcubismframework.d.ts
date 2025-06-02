import { CubismIdManager } from './id/cubismidmanager';
export declare function strtod(s: string, endPtr: string[]): number;
export declare const Constant: Readonly<Record<string, number>>;
export declare function csmDelete<T>(address: T): void;
export declare class CubismFramework {
    static startUp(option?: Option): boolean;
    static cleanUp(): void;
    static initialize(memorySize?: number): void;
    static dispose(): void;
    static isStarted(): boolean;
    static isInitialized(): boolean;
    static coreLogFunction(message: string): void;
    static getLoggingLevel(): LogLevel;
    static getIdManager(): CubismIdManager;
    private constructor();
}
export declare class Option {
    logFunction: Live2DCubismCore.csmLogFunction;
    loggingLevel: LogLevel;
}
export declare enum LogLevel {
    LogLevel_Verbose = 0,
    LogLevel_Debug = 1,
    LogLevel_Info = 2,
    LogLevel_Warning = 3,
    LogLevel_Error = 4,
    LogLevel_Off = 5
}
import * as $ from './live2dcubismframework';
export declare namespace Live2DCubismFramework {
    const Constant: Readonly<Record<string, number>>;
    const csmDelete: typeof $.csmDelete;
    const CubismFramework: typeof $.CubismFramework;
    type CubismFramework = $.CubismFramework;
}
