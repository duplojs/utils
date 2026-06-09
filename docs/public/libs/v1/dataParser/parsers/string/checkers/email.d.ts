import { type DataParserError } from "../../../../dataParser/error";
import { type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";
export interface DataParserCheckerDefinitionEmail extends DataParserCheckerDefinition {
    regex: RegExp;
}
export declare const checkerEmailKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-email", unknown>>;
declare const DataParserCheckerEmail_base: import("../../..").DataParserCheckerBaseInit<import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-email", unknown>>>;
export declare class DataParserCheckerEmail extends DataParserCheckerEmail_base<DataParserCheckerDefinitionEmail, string> {
    get classConstructor(): typeof DataParserCheckerEmail & import("../../..").CheckedConstructorKind;
    isAsynchronous(): boolean;
    static execCheck(data: string, error: DataParserError, self: DataParserCheckerEmail, dataParser: DataParser): string | typeof import("../../../../dataParser/error").SymbolDataParserError;
    static create(definition?: Partial<Omit<DataParserCheckerDefinitionEmail, "regex">>): DataParserCheckerEmail;
}
export declare const checkerEmail: typeof DataParserCheckerEmail.create;
export declare function email(definition?: Partial<Omit<DataParserCheckerDefinitionEmail, "regex">>): import("..").DataParserString<{
    readonly checkers: readonly [DataParserCheckerEmail];
    readonly errorMessage?: string | undefined;
    readonly coerce: boolean;
}>;
export {};
