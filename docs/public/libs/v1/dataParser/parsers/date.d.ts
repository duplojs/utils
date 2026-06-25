import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../common";
import { type DataParserDefinition } from "../base";
import { type DataParserError, type SymbolDataParserError } from "../../dataParser/error";
import { type DataParserChecker } from "../baseChecker";
import { type ApplyRefinementOfDefinition, type AddCheckersToDefinition, type GetEligibleChecker, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../types";
import * as DDate from "../../date";
export type DataParserDateCheckers = GetEligibleChecker<DDate.TheDate>;
export interface DataParserDefinitionDate extends DataParserDefinition<DataParserDateCheckers> {
    readonly coerce: boolean;
}
export declare const dateKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/date", unknown>>;
declare const DataParserDate_base: import("..").DataParserBaseInit<import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/date", unknown>>>;
export declare class DataParserDate<GenericDefinition extends DataParserDefinitionDate = DataParserDefinitionDate> extends DataParserDate_base<GenericDefinition, ApplyRefinementOfDefinition<DDate.TheDate, GenericDefinition>, ApplyRefinementOfDefinition<DDate.TheDate, GenericDefinition> | Date | DDate.SerializedTheDate> {
    get classConstructor(): typeof DataParserDate & import("..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserDate<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    static execParse(self: DataParserDate, data: unknown, error: DataParserError): DDate.TheDate | typeof SymbolDataParserError;
    static dataParserIsAsynchronous(self: DataParserDate): boolean;
    static prepareDefinition(definition?: Partial<DataParserDefinitionDate>): DataParserDefinitionDate;
    /**
     * Creates a classic parser for `TheDate` values.
     * 
     * Signature: `DP.date(definition?)` → `DataParserDate`
     * 
     * The parser accepts `TheDate`, `SerializedTheDate`, and native `Date`.
     * With `coerce: true`, safe timestamps and parsable date strings are also supported.
     * 
     * ```ts
     * const parser = DP.date();
     * const result = parser.parse("date0+");
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: TheDate
     * }
     * 
     * const withCheckers = DP.date({
     * 	checkers: [DP.checkerRefine((value) => value.getUTCFullYear() >= 2024)],
     * });
     * const checked = withCheckers.parse("date1704067200000+");
     * // checked: E.Error<DP.DataParserError> | E.Success<TheDate>
     * 
     * const coerceParser = DP.coerce.date();
     * const coerceResult = coerceParser.parse("2024-01-01T00:00:00.000Z");
     * // coerceResult: E.Error<DP.DataParserError> | E.Success<TheDate>
     * ```
     * 
     * @remarks
     * - Parsed output is always `TheDate`.
     * - Use `DP.coerce.date()` when you want coercion enabled by default.
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/date
     * 
     * @namespace DP
     * 
     */
    static create<const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionDate> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<DataParserDefinitionDate>, GenericDefinition>): DataParserDate<MergeDefinition<DataParserDefinitionDate, NeverCoalescing<GenericDefinition, {}>>>;
}
/**
 * Creates a classic parser for `TheDate` values.
 * 
 * Signature: `DP.date(definition?)` → `DataParserDate`
 * 
 * The parser accepts `TheDate`, `SerializedTheDate`, and native `Date`.
 * With `coerce: true`, safe timestamps and parsable date strings are also supported.
 * 
 * ```ts
 * const parser = DP.date();
 * const result = parser.parse("date0+");
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: TheDate
 * }
 * 
 * const withCheckers = DP.date({
 * 	checkers: [DP.checkerRefine((value) => value.getUTCFullYear() >= 2024)],
 * });
 * const checked = withCheckers.parse("date1704067200000+");
 * // checked: E.Error<DP.DataParserError> | E.Success<TheDate>
 * 
 * const coerceParser = DP.coerce.date();
 * const coerceResult = coerceParser.parse("2024-01-01T00:00:00.000Z");
 * // coerceResult: E.Error<DP.DataParserError> | E.Success<TheDate>
 * ```
 * 
 * @remarks
 * - Parsed output is always `TheDate`.
 * - Use `DP.coerce.date()` when you want coercion enabled by default.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/date
 * 
 * @namespace DP
 * 
 */
export declare const date: typeof DataParserDate.create;
export {};
