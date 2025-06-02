import { csmMap } from '../type/csmmap';
import { csmString } from '../type/csmstring';
import { csmVector } from '../type/csmvector';
export declare abstract class Value {
    constructor();
    abstract getString(defaultValue?: string, indent?: string): string;
    getRawString(defaultValue?: string, indent?: string): string;
    toInt(defaultValue?: number): number;
    toFloat(defaultValue?: number): number;
    toBoolean(defaultValue?: boolean): boolean;
    getSize(): number;
    getArray(defaultValue?: Value[]): Value[];
    getVector(defaultValue?: csmVector<Value>): csmVector<Value>;
    getMap(defaultValue?: csmMap<string, Value>): csmMap<string, Value>;
    getValueByIndex(index: number): Value;
    getValueByString(s: string | csmString): Value;
    getKeys(): csmVector<string>;
    isError(): boolean;
    isNull(): boolean;
    isBool(): boolean;
    isFloat(): boolean;
    isString(): boolean;
    isArray(): boolean;
    isMap(): boolean;
    equals(value: csmString): boolean;
    equals(value: string): boolean;
    equals(value: number): boolean;
    equals(value: boolean): boolean;
    isStatic(): boolean;
    setErrorNotForClientCall(errorStr: string): Value;
    static staticInitializeNotForClientCall(): void;
    static staticReleaseNotForClientCall(): void;
    protected _stringBuffer: string;
    private static dummyKeys;
    static errorValue: Value;
    static nullValue: Value;
    [key: string]: any;
}
export declare class CubismJson {
    constructor(buffer?: ArrayBuffer, length?: number);
    static create(buffer: ArrayBuffer, size: number): CubismJson;
    static delete(instance: CubismJson): void;
    getRoot(): Value;
    static arrayBufferToString(buffer: ArrayBuffer): string;
    private static pad;
    parseBytes(buffer: ArrayBuffer, size: number, parseCallback?: parseJsonObject): boolean;
    getParseError(): string;
    checkEndOfFile(): boolean;
    protected parseValue(buffer: string, length: number, begin: number, outEndPos: number[]): Value;
    protected parseString(string: string, length: number, begin: number, outEndPos: number[]): string;
    protected parseObject(buffer: string, length: number, begin: number, outEndPos: number[]): Value;
    protected parseArray(buffer: string, length: number, begin: number, outEndPos: number[]): Value;
    _parseCallback: parseJsonObject;
    _error: string;
    _lineCount: number;
    _root: Value;
}
interface parseJsonObject {
    (obj: Value, map: JsonMap): JsonMap;
}
export declare class JsonFloat extends Value {
    constructor(v: number);
    isFloat(): boolean;
    getString(defaultValue: string, indent: string): string;
    toInt(defaultValue?: number): number;
    toFloat(defaultValue?: number): number;
    equals(value: csmString): boolean;
    equals(value: string): boolean;
    equals(value: number): boolean;
    equals(value: boolean): boolean;
    private _value;
}
export declare class JsonBoolean extends Value {
    isBool(): boolean;
    toBoolean(defaultValue?: boolean): boolean;
    getString(defaultValue: string, indent: string): string;
    equals(value: csmString): boolean;
    equals(value: string): boolean;
    equals(value: number): boolean;
    equals(value: boolean): boolean;
    isStatic(): boolean;
    constructor(v: boolean);
    static trueValue: JsonBoolean;
    static falseValue: JsonBoolean;
    private _boolValue;
}
export declare class JsonString extends Value {
    constructor(s: string);
    constructor(s: csmString);
    isString(): boolean;
    getString(defaultValue: string, indent: string): string;
    equals(value: csmString): boolean;
    equals(value: string): boolean;
    equals(value: number): boolean;
    equals(value: boolean): boolean;
}
export declare class JsonError extends JsonString {
    isStatic(): boolean;
    setErrorNotForClientCall(s: string): Value;
    constructor(s: csmString | string, isStatic: boolean);
    isError(): boolean;
    protected _isStatic: boolean;
}
export declare class JsonNullvalue extends Value {
    isNull(): boolean;
    getString(defaultValue: string, indent: string): string;
    isStatic(): boolean;
    setErrorNotForClientCall(s: string): Value;
    constructor();
}
export declare class JsonArray extends Value {
    constructor();
    release(): void;
    isArray(): boolean;
    getValueByIndex(index: number): Value;
    getValueByString(s: string | csmString): Value;
    getString(defaultValue: string, indent: string): string;
    add(v: Value): void;
    getVector(defaultValue?: csmVector<Value>): csmVector<Value>;
    getSize(): number;
    private _array;
}
export declare class JsonMap extends Value {
    constructor();
    release(): void;
    isMap(): boolean;
    getValueByString(s: string | csmString): Value;
    getValueByIndex(index: number): Value;
    getString(defaultValue: string, indent: string): string;
    getMap(defaultValue?: csmMap<string, Value>): csmMap<string, Value>;
    put(key: string, v: Value): void;
    getKeys(): csmVector<string>;
    getSize(): number;
    private _map;
    private _keys;
}
import * as $ from './cubismjson';
export declare namespace Live2DCubismFramework {
    const CubismJson: typeof $.CubismJson;
    type CubismJson = $.CubismJson;
    const JsonArray: typeof $.JsonArray;
    type JsonArray = $.JsonArray;
    const JsonBoolean: typeof $.JsonBoolean;
    type JsonBoolean = $.JsonBoolean;
    const JsonError: typeof $.JsonError;
    type JsonError = $.JsonError;
    const JsonFloat: typeof $.JsonFloat;
    type JsonFloat = $.JsonFloat;
    const JsonMap: typeof $.JsonMap;
    type JsonMap = $.JsonMap;
    const JsonNullvalue: typeof $.JsonNullvalue;
    type JsonNullvalue = $.JsonNullvalue;
    const JsonString: typeof $.JsonString;
    type JsonString = $.JsonString;
    const Value: typeof $.Value;
    type Value = $.Value;
}
export {};
