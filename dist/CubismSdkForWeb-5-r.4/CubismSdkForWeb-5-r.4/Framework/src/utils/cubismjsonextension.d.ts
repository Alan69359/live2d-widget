import { JsonArray, JsonMap, Value } from './cubismjson';
export declare class CubismJsonExtension {
    static parseJsonObject(obj: Value, map: JsonMap): JsonMap;
    protected static parseJsonArray(obj: Value): JsonArray;
}
