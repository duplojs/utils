import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer } from "../../../common";
import { type DataParserDefinition, type DataParser, type DataParserChecker } from "../../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "../../types";
import { type DataParserCheckerBigIntMin, type DataParserCheckerBigIntMax } from "./checkers";
import { type CheckerRefineImplementation } from "../refine";
import { type GetPropsWithValueExtends } from "../../../object";
export * from "./checkers";
export interface DataParserBigIntCheckerCustom {
}
export type DataParserBigIntCheckers = (DataParserBigIntCheckerCustom[GetPropsWithValueExtends<DataParserBigIntCheckerCustom, DataParserChecker>] | DataParserCheckerBigIntMin | DataParserCheckerBigIntMax | CheckerRefineImplementation<bigint>);
export interface DataParserDefinitionBigInt extends DataParserDefinition<DataParserBigIntCheckers> {
    readonly coerce: boolean;
}
export declare const bigIntKind: import("../../../common").KindHandler<import("../../../common").KindDefinition<"@DuplojsUtilsDataParser/bigint", unknown>>;
type _DataParserBigInt<GenericDefinition extends DataParserDefinitionBigInt> = (DataParser<GenericDefinition, bigint, bigint> & Kind<typeof bigIntKind.definition>);
export interface DataParserBigInt<GenericDefinition extends DataParserDefinitionBigInt = DataParserDefinitionBigInt> extends _DataParserBigInt<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserBigIntCheckers,
        ...DataParserBigIntCheckers[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserBigIntCheckers,
        ...DataParserBigIntCheckers[]
    ], GenericChecker>): DataParserBigInt<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    /**
     * @deprecated Method with unreliable typing.
     */
    construct<const GenericDefinition extends DataParserDefinitionBigInt>(definition: GenericDefinition): DataParserBigInt<MergeDefinition<DataParserDefinitionBigInt, GenericDefinition>>;
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
export declare function bigint<const GenericDefinition extends Partial<DataParserDefinitionBigInt> = never>(definition?: GenericDefinition): DataParserBigInt<MergeDefinition<DataParserDefinitionBigInt, NeverCoalescing<GenericDefinition, {}>>>;
export declare namespace bigint {
    var overrideHandler: import("../../../common").OverrideHandler<DataParserBigInt<DataParserDefinitionBigInt>>;
}
