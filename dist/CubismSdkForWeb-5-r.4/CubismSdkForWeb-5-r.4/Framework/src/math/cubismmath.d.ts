import { CubismVector2 } from './cubismvector2';
export declare class CubismMath {
    static readonly Epsilon: number;
    static range(value: number, min: number, max: number): number;
    static sin(x: number): number;
    static cos(x: number): number;
    static abs(x: number): number;
    static sqrt(x: number): number;
    static cbrt(x: number): number;
    static getEasingSine(value: number): number;
    static max(left: number, right: number): number;
    static min(left: number, right: number): number;
    static clamp(val: number, min: number, max: number): number;
    static degreesToRadian(degrees: number): number;
    static radianToDegrees(radian: number): number;
    static directionToRadian(from: CubismVector2, to: CubismVector2): number;
    static directionToDegrees(from: CubismVector2, to: CubismVector2): number;
    static radianToDirection(totalAngle: number): CubismVector2;
    static quadraticEquation(a: number, b: number, c: number): number;
    static cardanoAlgorithmForBezier(a: number, b: number, c: number, d: number): number;
    static mod(dividend: number, divisor: number): number;
    private constructor();
}
import * as $ from './cubismmath';
export declare namespace Live2DCubismFramework {
    const CubismMath: typeof $.CubismMath;
    type CubismMath = $.CubismMath;
}
