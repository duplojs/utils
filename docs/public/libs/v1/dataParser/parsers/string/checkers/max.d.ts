import { type DataParserError } from "../../../../dataParser/error";
import { type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";
export interface DataParserCheckerDefinitionStringMax extends DataParserCheckerDefinition {
    max: number;
}
export declare const checkerStringMaxKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-string-max", unknown>>;
declare const DataParserCheckerStringMax_base: import("../../..").DataParserCheckerBaseInit<import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-string-max", unknown>>>;
export declare class DataParserCheckerStringMax extends DataParserCheckerStringMax_base<DataParserCheckerDefinitionStringMax, string> {
    get classConstructor(): typeof DataParserCheckerStringMax & import("../../..").CheckedConstructorKind;
    isAsynchronous(): boolean;
    static execCheck(data: string, error: DataParserError, self: DataParserCheckerStringMax, dataParser: DataParser): unknown;
    static create(max: number, definition?: Partial<Omit<DataParserCheckerDefinitionStringMax, "max">>): DataParserCheckerStringMax;
}
export declare const checkerStringMax: typeof DataParserCheckerStringMax.create;
export {};
