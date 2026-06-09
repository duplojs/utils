import { type DataParserError } from "../../../../dataParser/error";
import { type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";
export interface DataParserCheckerDefinitionNumberMax extends DataParserCheckerDefinition {
    max: number;
    exclusive: boolean;
}
export declare const checkerNumberMaxKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-number-max", unknown>>;
declare const DataParserCheckerNumberMax_base: import("../../..").DataParserCheckerBaseInit<import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-number-max", unknown>>>;
export declare class DataParserCheckerNumberMax extends DataParserCheckerNumberMax_base<DataParserCheckerDefinitionNumberMax, number> {
    get classConstructor(): typeof DataParserCheckerNumberMax & import("../../..").CheckedConstructorKind;
    isAsynchronous(): boolean;
    static execCheck(value: number, error: DataParserError, self: DataParserCheckerNumberMax, dataParser: DataParser): number | typeof import("../../../../dataParser/error").SymbolDataParserError;
    static create(max: number, definition?: Partial<Omit<DataParserCheckerDefinitionNumberMax, "max">>): DataParserCheckerNumberMax;
}
export declare const checkerNumberMax: typeof DataParserCheckerNumberMax.create;
export {};
