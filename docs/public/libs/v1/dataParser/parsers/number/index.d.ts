import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer } from "../../../common";
import { type DataParserDefinition, type DataParserBase, type Output, type DataParserChecker } from "../../base";
import { type GetEligibleChecker, type AddCheckersToDefinition, type MergeDefinition, type PrepareDataParserDefinition } from "../../../dataParser/types";
export * from "./checkers";
export type DataParserNumberCheckers = GetEligibleChecker<number>;
export interface DataParserDefinitionNumber extends DataParserDefinition<DataParserNumberCheckers> {
    readonly coerce: boolean;
}
export declare const numberKind: import("../../../common").KindHandler<import("../../../common").KindDefinition<"@DuplojsUtilsDataParser/number", unknown>>;
type _DataParserNumber<GenericDefinition extends DataParserDefinitionNumber> = (DataParserBase<GenericDefinition, number, number> & Kind<typeof numberKind.definition>);
export interface DataParserNumber<GenericDefinition extends DataParserDefinitionNumber = DataParserDefinitionNumber> extends _DataParserNumber<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>): DataParserNumber<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
}
/**
 * Creates a data parser for numbers.
 * 
 * **Supported call styles:**
 * - Classic: `DP.number(definition?)` -> returns a number parser
 * - Curried: not available
 * 
 * Validates that the input is a number (non-NaN), optionally applies coerce, and runs the configured checkers.
 * 
 * ```ts
 * const parser = DP.number();
 * const result = parser.parse(42);
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: number
 * }
 * 
 * const withCheckers = DP.number({
 * 	checkers: [DP.checkerNumberMin(0), DP.checkerInt()],
 * });
 * 
 * const coerceParser = DP.coerce.number();
 * const coerceResult = coerceParser.parse("42");
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/number
 * 
 * @namespace DP
 * 
 */
export declare function number<const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionNumber> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<DataParserDefinitionNumber>, GenericDefinition>): DataParserNumber<MergeDefinition<DataParserDefinitionNumber, NeverCoalescing<GenericDefinition, {}>>>;
export declare namespace number {
    var overrideHandler: import("../../../common").OverrideHandler<DataParserNumber<DataParserDefinitionNumber>>;
}
