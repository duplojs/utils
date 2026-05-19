import { type Kind } from "../../../../common";
import { type DataParserCheckerDefinition, type DataParserCheckerBase } from "../../../../dataParser/base";
export interface DataParserCheckerDefinitionRegex extends DataParserCheckerDefinition {
    regex: RegExp;
}
export declare const checkerRegexKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-regex", unknown>>;
type _DataParserCheckerStringRegex = (Kind<typeof checkerRegexKind.definition> & DataParserCheckerBase<DataParserCheckerDefinitionRegex, string>);
export interface DataParserCheckerRegex extends _DataParserCheckerStringRegex {
}
export declare function checkerRegex(regex: RegExp, definition?: Partial<Omit<DataParserCheckerDefinitionRegex, "regex">>): DataParserCheckerRegex;
export {};
