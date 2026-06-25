import { type DataParserError } from "../../../../dataParser/error";
import { type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";
export interface DataParserCheckerDefinitionArrayMin<GenericMin extends number = number> extends DataParserCheckerDefinition {
    min: GenericMin;
}
export declare const checkerArrayMinKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-array-min", unknown>>;
declare const DataParserCheckerArrayMin_base: import("../../..").DataParserCheckerBaseInit<import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-array-min", unknown>>>;
export declare class DataParserCheckerArrayMin<GenericMin extends number = number> extends DataParserCheckerArrayMin_base<DataParserCheckerDefinitionArrayMin<GenericMin>, unknown[]> {
    get classConstructor(): typeof DataParserCheckerArrayMin & import("../../..").CheckedConstructorKind;
    isAsynchronous(): boolean;
    static execCheck(data: unknown[], error: DataParserError, self: DataParserCheckerArrayMin, dataParser: DataParser): unknown;
    static create<GenericMin extends number>(min: GenericMin, definition?: Partial<Omit<DataParserCheckerDefinitionArrayMin, "min">>): DataParserCheckerArrayMin<GenericMin>;
}
export declare const checkerArrayMin: typeof DataParserCheckerArrayMin.create;
export {};
