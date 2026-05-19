import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer } from "../../../common";
import { type DataParserDefinition, type DataParserBase, type Output, type DataParserChecker } from "../../base";
import { type GetEligibleChecker, type AddCheckersToDefinition, type MergeDefinition, type PrepareDataParserDefinition } from "../../../dataParser/types";
export * from "./checkers";
export type DataParserBigIntCheckers = GetEligibleChecker<bigint>;
export interface DataParserDefinitionBigInt extends DataParserDefinition<DataParserBigIntCheckers> {
    readonly coerce: boolean;
}
export declare const bigIntKind: import("../../../common").KindHandler<import("../../../common").KindDefinition<"@DuplojsUtilsDataParser/bigint", unknown>>;
type _DataParserBigInt<GenericDefinition extends DataParserDefinitionBigInt> = (DataParserBase<GenericDefinition, bigint, bigint> & Kind<typeof bigIntKind.definition>);
export interface DataParserBigInt<GenericDefinition extends DataParserDefinitionBigInt = DataParserDefinitionBigInt> extends _DataParserBigInt<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>): DataParserBigInt<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
}
/**
 * Creates a data parser for bigint values.
 * 
 * **Supported call styles:**
 * - Classic: `DP.bigint(definition?)` -> returns a bigint parser
 * - Curried: not available
 * 
 * Validates that the input is a bigint, optionally applies coerce, and runs the configured checkers.
 * 
 * ```ts
 * const parser = DP.bigint();
 * const result = parser.parse(BigInt(42));
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: bigint
 * }
 * 
 * const withCheckers = DP.bigint({
 * 	checkers: [DP.checkerBigIntMin(BigInt(1)), DP.checkerBigIntMax(BigInt(10))],
 * });
 * 
 * const coerceParser = DP.coerce.bigint();
 * const coerceResult = coerceParser.parse("42");
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/bigint
 * 
 * @namespace DP
 * 
 */
export declare function bigint<const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionBigInt> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<DataParserDefinitionBigInt>, GenericDefinition>): DataParserBigInt<MergeDefinition<DataParserDefinitionBigInt, NeverCoalescing<GenericDefinition, {}>>>;
export declare namespace bigint {
    var overrideHandler: import("../../../common").OverrideHandler<DataParserBigInt<DataParserDefinitionBigInt>>;
}
