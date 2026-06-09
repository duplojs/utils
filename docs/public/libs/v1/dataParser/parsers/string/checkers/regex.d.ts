import { type DataParserError } from "../../../../dataParser/error";
import { type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";
export interface DataParserCheckerDefinitionRegex extends DataParserCheckerDefinition {
    regex: RegExp;
}
export declare const checkerRegexKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-regex", unknown>>;
declare const DataParserCheckerRegex_base: import("../../..").DataParserCheckerBaseInit<import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-regex", unknown>>>;
export declare class DataParserCheckerRegex extends DataParserCheckerRegex_base<DataParserCheckerDefinitionRegex, string> {
    get classConstructor(): typeof DataParserCheckerRegex & import("../../..").CheckedConstructorKind;
    isAsynchronous(): boolean;
    static execCheck(data: string, error: DataParserError, self: DataParserCheckerRegex, dataParser: DataParser): string | typeof import("../../../../dataParser/error").SymbolDataParserError;
    static create(regex: RegExp, definition?: Partial<Omit<DataParserCheckerDefinitionRegex, "regex">>): DataParserCheckerRegex;
}
export declare const checkerRegex: typeof DataParserCheckerRegex.create;
export {};
