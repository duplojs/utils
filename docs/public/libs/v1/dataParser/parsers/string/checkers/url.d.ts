import { type Kind } from "../../../../common";
import { type DataParserCheckerDefinition, type DataParserChecker } from "../../../base";
export interface DataParserCheckerDefinitionUrl extends DataParserCheckerDefinition {
    hostname?: RegExp;
    protocol?: RegExp;
    normalize?: boolean;
}
export declare const dataParserCheckerUrlKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"data-parser-checker-url", unknown>>;
type _DataParserCheckerUrl = (Kind<typeof dataParserCheckerUrlKind.definition> & DataParserChecker<DataParserCheckerDefinitionUrl, string>);
export interface DataParserCheckerUrl extends _DataParserCheckerUrl {
}
export declare function checkerUrl(definition?: Partial<DataParserCheckerDefinitionUrl>): DataParserCheckerUrl;
export declare function url(definition?: Partial<DataParserCheckerDefinitionUrl>): import("..").DataParserString<{
    readonly checkers: readonly [DataParserCheckerUrl];
    readonly errorMessage?: string | undefined;
    readonly coerce: boolean;
}>;
export {};
