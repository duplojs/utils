import { type DataParserError } from "../../../../dataParser/error";
import { type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";
export interface DataParserCheckerDefinitionStringMin extends DataParserCheckerDefinition {
    min: number;
}
export declare const checkerStringMinKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-string-min", unknown>>;
declare const DataParserCheckerStringMin_base: import("../../..").DataParserCheckerBaseInit<import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-string-min", unknown>>>;
export declare class DataParserCheckerStringMin extends DataParserCheckerStringMin_base<DataParserCheckerDefinitionStringMin, string> {
    get classConstructor(): typeof DataParserCheckerStringMin & import("../../..").CheckedConstructorKind;
    isAsynchronous(): boolean;
    static execCheck(data: string, error: DataParserError, self: DataParserCheckerStringMin, dataParser: DataParser): unknown;
    static create(min: number, definition?: Partial<Omit<DataParserCheckerDefinitionStringMin, "min">>): DataParserCheckerStringMin;
}
export declare const checkerStringMin: typeof DataParserCheckerStringMin.create;
export {};
