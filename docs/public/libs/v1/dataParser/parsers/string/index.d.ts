import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../../common";
import { type DataParserDefinition } from "../../base";
import { type DataParserError, type SymbolDataParserError } from "../../../dataParser/error";
import { type DataParserChecker } from "../../baseChecker";
import { type GetEligibleChecker, type AddCheckersToDefinition, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../../types";
export * from "./checkers";
export type DataParserStringCheckers = GetEligibleChecker<string>;
export interface DataParserDefinitionString extends DataParserDefinition<DataParserStringCheckers> {
    readonly coerce: boolean;
}
export declare const stringKind: import("../../../common").KindHandler<import("../../../common").KindDefinition<"@DuplojsUtilsDataParser/string", unknown>>;
declare const DataParserString_base: import("../..").DataParserBaseInit<import("../../../common").KindHandler<import("../../../common").KindDefinition<"@DuplojsUtilsDataParser/string", unknown>>>;
export declare class DataParserString<GenericDefinition extends DataParserDefinitionString = DataParserDefinitionString> extends DataParserString_base<GenericDefinition, string, string> {
    get classConstructor(): typeof DataParserString & import("../..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserString<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    static execParse(self: DataParserString, data: unknown, error: DataParserError): (string | typeof SymbolDataParserError);
    static dataParserIsAsynchronous(self: DataParserString): boolean;
    static prepareDefinition(definition?: Partial<DataParserDefinitionString>): DataParserDefinitionString;
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
    static create<const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionString> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<DataParserDefinitionString>, GenericDefinition>): DataParserString<MergeDefinition<DataParserDefinitionString, NeverCoalescing<GenericDefinition, {}>>>;
}
export declare const string: typeof DataParserString.create;
