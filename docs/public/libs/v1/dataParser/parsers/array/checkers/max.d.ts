import { type DataParserError } from "../../../../dataParser/error";
import { type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";
export interface DataParserCheckerDefinitionArrayMax extends DataParserCheckerDefinition {
    max: number;
}
export declare const checkerArrayMaxKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-array-max", unknown>>;
declare const DataParserCheckerArrayMax_base: import("../../..").DataParserCheckerBaseInit<import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-array-max", unknown>>>;
export declare class DataParserCheckerArrayMax extends DataParserCheckerArrayMax_base<DataParserCheckerDefinitionArrayMax, unknown[]> {
    get classConstructor(): typeof DataParserCheckerArrayMax & import("../../..").CheckedConstructorKind;
    isAsynchronous(): boolean;
    static execCheck(data: unknown[], error: DataParserError, self: DataParserCheckerArrayMax, dataParser: DataParser): unknown[] | typeof import("../../../../dataParser/error").SymbolDataParserError;
    static create(max: number, definition?: Partial<Omit<DataParserCheckerDefinitionArrayMax, "max">>): DataParserCheckerArrayMax;
}
export declare const checkerArrayMax: typeof DataParserCheckerArrayMax.create;
export {};
