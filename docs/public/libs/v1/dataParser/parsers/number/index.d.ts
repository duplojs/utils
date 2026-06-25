import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../../common";
import { type DataParserDefinition } from "../../base";
import { type DataParserError, type SymbolDataParserError } from "../../../dataParser/error";
import { type DataParserChecker } from "../../baseChecker";
import { type ApplyRefinementOfDefinition, type GetEligibleChecker, type AddCheckersToDefinition, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../../types";
export * from "./checkers";
export type DataParserNumberCheckers = GetEligibleChecker<number>;
export interface DataParserDefinitionNumber extends DataParserDefinition<DataParserNumberCheckers> {
    readonly coerce: boolean;
}
export declare const numberKind: import("../../../common").KindHandler<import("../../../common").KindDefinition<"@DuplojsUtilsDataParser/number", unknown>>;
declare const DataParserNumber_base: import("../..").DataParserBaseInit<import("../../../common").KindHandler<import("../../../common").KindDefinition<"@DuplojsUtilsDataParser/number", unknown>>>;
export declare class DataParserNumber<GenericDefinition extends DataParserDefinitionNumber = DataParserDefinitionNumber> extends DataParserNumber_base<GenericDefinition, ApplyRefinementOfDefinition<number, GenericDefinition>, ApplyRefinementOfDefinition<number, GenericDefinition>> {
    get classConstructor(): typeof DataParserNumber & import("../..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserNumber<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    static execParse(self: DataParserNumber, data: unknown, error: DataParserError): (number | typeof SymbolDataParserError);
    static dataParserIsAsynchronous(self: DataParserNumber): boolean;
    static prepareDefinition(definition?: Partial<DataParserDefinitionNumber>): DataParserDefinitionNumber;
    /**
     * Creates a data parser for numbers.
     * 
     * **Supported call styles:**
     * - Classic: `DP.number(definition?)` -> returns a number parser
     * - Curried: not available
     * 
     * Validates that the input is a finite number, optionally applies coerce, and runs the configured checkers. `NaN`, `Infinity`, and `-Infinity` are rejected.
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
    static create<const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionNumber> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<DataParserDefinitionNumber>, GenericDefinition>): DataParserNumber<MergeDefinition<DataParserDefinitionNumber, NeverCoalescing<GenericDefinition, {}>>>;
}
/**
 * Creates a data parser for numbers.
 * 
 * **Supported call styles:**
 * - Classic: `DP.number(definition?)` -> returns a number parser
 * - Curried: not available
 * 
 * Validates that the input is a finite number, optionally applies coerce, and runs the configured checkers. `NaN`, `Infinity`, and `-Infinity` are rejected.
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
export declare const number: typeof DataParserNumber.create;
