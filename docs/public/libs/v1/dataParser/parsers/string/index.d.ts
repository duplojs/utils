import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer } from "../../../common";
import { type DataParserDefinition, type DataParser, type DataParserChecker } from "../../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "../../types";
import { type DataParserCheckerUrl, type DataParserCheckerEmail, type DataParserCheckerStringMin, type DataParserCheckerStringMax, type DataParserCheckerStringRegex } from "./checkers";
import { type CheckerRefineImplementation } from "../refine";
import { type GetPropsWithValueExtends } from "../../../object";
export * from "./checkers";
export interface DataParserStringCheckerCustom {
}
export type DataParserStringCheckers = (DataParserStringCheckerCustom[GetPropsWithValueExtends<DataParserStringCheckerCustom, DataParserChecker>] | DataParserCheckerUrl | DataParserCheckerEmail | DataParserCheckerStringMin | DataParserCheckerStringMax | DataParserCheckerStringRegex | CheckerRefineImplementation<string>);
export interface DataParserDefinitionString extends DataParserDefinition<DataParserStringCheckers> {
    readonly coerce: boolean;
}
export declare const stringKind: import("../../../common").KindHandler<import("../../../common").KindDefinition<"@DuplojsUtilsDataParser/string", unknown>>;
type _DataParserString<GenericDefinition extends DataParserDefinitionString> = (DataParser<GenericDefinition, string, string> & Kind<typeof stringKind.definition>);
export interface DataParserString<GenericDefinition extends DataParserDefinitionString = DataParserDefinitionString> extends _DataParserString<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserStringCheckers,
        ...DataParserStringCheckers[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserStringCheckers,
        ...DataParserStringCheckers[]
    ], GenericChecker>): DataParserString<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    /**
     * @deprecated Method with unreliable typing.
     */
    construct<const GenericDefinition extends DataParserDefinitionString>(definition: GenericDefinition): DataParserString<MergeDefinition<DataParserDefinitionString, GenericDefinition>>;
}
/**
 * Creates a data parser for strings.
 * 
 * **Supported call styles:**
 * - Classic: `DP.string(definition?)` -> returns a string parser
 * - Curried: not available
 * 
 * Validates that the input is a string, optionally applies coerce, and runs the configured checkers.
 * 
 * ```ts
 * const parser = DP.string();
 * const result = parser.parse("DuploJS");
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: string
 * }
 * 
 * const withCheckers = DP.string({
 * 	checkers: [DP.checkerStringMin(3), DP.checkerStringMax(10)],
 * });
 * 
 * const coerceParser = DP.coerce.string();
 * const coerceResult = coerceParser.parse(123);
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/string
 * 
 * @namespace DP
 * 
 */
export declare function string<const GenericDefinition extends Partial<DataParserDefinitionString> = never>(definition?: GenericDefinition): DataParserString<MergeDefinition<DataParserDefinitionString, NeverCoalescing<GenericDefinition, {}>>>;
export declare namespace string {
    var overrideHandler: import("../../../common").OverrideHandler<DataParserString<DataParserDefinitionString>>;
}
