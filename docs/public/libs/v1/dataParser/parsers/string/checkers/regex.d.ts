import { type Kind } from "../../../../common";
import { type DataParserCheckerDefinition, type DataParserChecker } from "../../../base";
export interface DataParserCheckerDefinitionStringRegex extends DataParserCheckerDefinition {
    regex: RegExp;
}
export declare const checkerStringRegexKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-string-regex", unknown>>;
type _DataParserCheckerStringRegex = (Kind<typeof checkerStringRegexKind.definition> & DataParserChecker<DataParserCheckerDefinitionStringRegex, string>);
export interface DataParserCheckerStringRegex extends _DataParserCheckerStringRegex {
}
export declare function checkerStringRegex(regex: RegExp, definition?: Partial<Omit<DataParserCheckerDefinitionStringRegex, "regex">>): DataParserCheckerStringRegex;
export {};
