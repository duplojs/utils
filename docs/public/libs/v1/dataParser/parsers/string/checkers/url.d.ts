import { type DataParserError } from "../../../../dataParser/error";
import { type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";
export interface DataParserCheckerDefinitionUrl extends DataParserCheckerDefinition {
    hostname?: RegExp;
    protocol?: RegExp;
    normalize?: boolean;
}
export declare const checkerUrlKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-url", unknown>>;
declare const DataParserCheckerUrl_base: import("../../..").DataParserCheckerBaseInit<import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-url", unknown>>>;
export declare class DataParserCheckerUrl extends DataParserCheckerUrl_base<DataParserCheckerDefinitionUrl, string> {
    get classConstructor(): typeof DataParserCheckerUrl & import("../../..").CheckedConstructorKind;
    isAsynchronous(): boolean;
    static execCheck(data: string, error: DataParserError, self: DataParserCheckerUrl, dataParser: DataParser): string | typeof import("../../../../dataParser/error").SymbolDataParserError;
    static create(definition?: Partial<DataParserCheckerDefinitionUrl>): DataParserCheckerUrl;
}
export declare const checkerUrl: typeof DataParserCheckerUrl.create;
export declare function url(definition?: Partial<DataParserCheckerDefinitionUrl>): import("..").DataParserString<{
    readonly checkers: readonly [DataParserCheckerUrl];
    readonly errorMessage?: string | undefined;
    readonly coerce: boolean;
}>;
export {};
