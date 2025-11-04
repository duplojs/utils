import { type NeverCoalescing, type Kind } from "../../../common";
import { type DataParserDefinition, type DataParser } from "../../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "../../../dataParser/types";
import { type DataParserCheckerUrl, type DataParserCheckerEmail, type DataParserCheckerStringMin, type DataParserCheckerStringMax, type DataParserCheckerStringRegex } from "./checkers";
export * from "./checkers";
export type DataParserStringCheckers = (DataParserCheckerUrl | DataParserCheckerEmail | DataParserCheckerStringMin | DataParserCheckerStringMax | DataParserCheckerStringRegex);
export interface DataParserDefinitionString extends DataParserDefinition<DataParserStringCheckers> {
    readonly coerce: boolean;
}
export declare const stringKind: import("../../../common").KindHandler<import("../../../common").KindDefinition<"@DuplojsUtilsDataParser/string", unknown>>;
type _DataParserString<GenericDefinition extends DataParserDefinitionString> = (DataParser<GenericDefinition, string, string> & Kind<typeof stringKind.definition>);
export interface DataParserString<GenericDefinition extends DataParserDefinitionString = DataParserDefinitionString> extends _DataParserString<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserStringCheckers,
        ...DataParserStringCheckers[]
    ]>(...args: GenericChecker): DataParserString<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
}
export declare function string<const GenericDefinition extends Partial<DataParserDefinitionString> = never>(definition?: GenericDefinition): DataParserString<MergeDefinition<DataParserDefinitionString, NeverCoalescing<GenericDefinition, {}>>>;
