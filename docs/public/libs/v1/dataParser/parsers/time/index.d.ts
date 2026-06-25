import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../../common";
import { type DataParserDefinition } from "../../base";
import { type DataParserError, type SymbolDataParserError } from "../../../dataParser/error";
import { type DataParserChecker } from "../../baseChecker";
import { type ApplyRefinementOfDefinition, type GetEligibleChecker, type AddCheckersToDefinition, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../../types";
import * as DDate from "../../../date";
export * from "./checkers";
export type DataParserTimeCheckers = GetEligibleChecker<DDate.TheTime>;
export interface DataParserDefinitionTime extends DataParserDefinition<DataParserTimeCheckers> {
    readonly coerce: boolean;
}
export declare const timeKind: import("../../../common").KindHandler<import("../../../common").KindDefinition<"@DuplojsUtilsDataParser/time", unknown>>;
declare const DataParserTime_base: import("../..").DataParserBaseInit<import("../../../common").KindHandler<import("../../../common").KindDefinition<"@DuplojsUtilsDataParser/time", unknown>>>;
export declare class DataParserTime<GenericDefinition extends DataParserDefinitionTime = DataParserDefinitionTime> extends DataParserTime_base<GenericDefinition, ApplyRefinementOfDefinition<DDate.TheTime, GenericDefinition>, ApplyRefinementOfDefinition<DDate.TheTime, GenericDefinition> | number | DDate.SerializedTheTime> {
    get classConstructor(): typeof DataParserTime & import("../..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserTime<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    static execParse(self: DataParserTime, data: unknown, error: DataParserError): (DDate.TheTime | typeof SymbolDataParserError);
    static dataParserIsAsynchronous(self: DataParserTime): boolean;
    static prepareDefinition(definition?: Partial<DataParserDefinitionTime>): DataParserDefinitionTime;
    /**
     * Creates a classic parser for `TheTime` values.
     * 
     * Signature: `DP.time(definition?)` → `DataParserTime`
     * 
     * The parser accepts `TheTime`, `SerializedTheTime`, and safe numeric time values.
     * With `coerce: true`, ISO-like time strings are also supported.
     * 
     * ```ts
     * const parser = DP.time();
     * const result = parser.parse("time0+");
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: TheTime
     * }
     * 
     * const withCheckers = DP.time({
     * 	checkers: [DP.checkerRefine((value) => value.toNative() !== 0)],
     * });
     * const checked = withCheckers.parse("time1000+");
     * // checked: E.Error<DP.DataParserError> | E.Success<TheTime>
     * 
     * const coerceParser = DP.coerce.time();
     * const coerceResult = coerceParser.parse("10:20:00");
     * // coerceResult: E.Error<DP.DataParserError> | E.Success<TheTime>
     * ```
     * 
     * @remarks
     * - Parsed output is always `TheTime`.
     * - Use `DP.coerce.time()` when you want string coercion enabled by default.
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/time
     * 
     * @namespace DP
     * 
     */
    static create<const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionTime> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<DataParserDefinitionTime>, GenericDefinition>): DataParserTime<MergeDefinition<DataParserDefinitionTime, NeverCoalescing<GenericDefinition, {}>>>;
}
/**
 * Creates a classic parser for `TheTime` values.
 * 
 * Signature: `DP.time(definition?)` → `DataParserTime`
 * 
 * The parser accepts `TheTime`, `SerializedTheTime`, and safe numeric time values.
 * With `coerce: true`, ISO-like time strings are also supported.
 * 
 * ```ts
 * const parser = DP.time();
 * const result = parser.parse("time0+");
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: TheTime
 * }
 * 
 * const withCheckers = DP.time({
 * 	checkers: [DP.checkerRefine((value) => value.toNative() !== 0)],
 * });
 * const checked = withCheckers.parse("time1000+");
 * // checked: E.Error<DP.DataParserError> | E.Success<TheTime>
 * 
 * const coerceParser = DP.coerce.time();
 * const coerceResult = coerceParser.parse("10:20:00");
 * // coerceResult: E.Error<DP.DataParserError> | E.Success<TheTime>
 * ```
 * 
 * @remarks
 * - Parsed output is always `TheTime`.
 * - Use `DP.coerce.time()` when you want string coercion enabled by default.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/time
 * 
 * @namespace DP
 * 
 */
export declare const time: typeof DataParserTime.create;
