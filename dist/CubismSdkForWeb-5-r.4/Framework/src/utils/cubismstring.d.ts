export declare class CubismString {
    static getFormatedString(format: string, ...args: any[]): string;
    static isStartWith(text: string, startWord: string): boolean;
    static stringToFloat(string: string, length: number, position: number, outEndPos: number[]): number;
    private constructor();
}
import * as $ from './cubismstring';
export declare namespace Live2DCubismFramework {
    const CubismString: typeof $.CubismString;
    type CubismString = $.CubismString;
}
