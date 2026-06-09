import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../../common";
import { type DataParserDefinition } from "../../base";
import { type DataParserError, type SymbolDataParserError } from "../../../dataParser/error";
import { type DataParserChecker } from "../../baseChecker";
import { type GetEligibleChecker, type AddCheckersToDefinition, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../../types";
export * from "./checkers";
export type DataParserBigIntCheckers = GetEligibleChecker<bigint>;
export interface DataParserDefinitionBigInt extends DataParserDefinition<DataParserBigIntCheckers> {
    readonly coerce: boolean;
}
export declare const bigIntKind: import("../../../common").KindHandler<import("../../../common").KindDefinition<"@DuplojsUtilsDataParser/bigint", unknown>>;
declare const DataParserBigInt_base: import("../..").DataParserBaseInit<import("../../../common").KindHandler<import("../../../common").KindDefinition<"@DuplojsUtilsDataParser/bigint", unknown>>>;
export declare class DataParserBigInt<GenericDefinition extends DataParserDefinitionBigInt = DataParserDefinitionBigInt> extends DataParserBigInt_base<GenericDefinition, bigint, bigint> {
    get classConstructor(): typeof DataParserBigInt & import("../..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserBigInt<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    static execParse(self: DataParserBigInt, data: unknown, error: DataParserError): (bigint | typeof SymbolDataParserError);
    static dataParserIsAsynchronous(self: DataParserBigInt): boolean;
    static prepareDefinition(definition?: Partial<DataParserDefinitionBigInt>): DataParserDefinitionBigInt;
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
    static create<const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionBigInt> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<DataParserDefinitionBigInt>, GenericDefinition>): DataParserBigInt<MergeDefinition<DataParserDefinitionBigInt, NeverCoalescing<GenericDefinition, {}>>>;
}
export declare const bigint: typeof DataParserBigInt.create;
