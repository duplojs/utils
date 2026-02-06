import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer } from "../../common";
import { type DataParserDefinition, type DataParser, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "../../object";
import * as DDate from "../../date";
export interface DataParserDateCheckerCustom {
}
export type DataParserDateCheckers = (DataParserDateCheckerCustom[GetPropsWithValueExtends<DataParserDateCheckerCustom, DataParserChecker>] | CheckerRefineImplementation<DDate.TheDate>);
export interface DataParserDefinitionDate extends DataParserDefinition<DataParserDateCheckers> {
    readonly coerce: boolean;
}
export declare const dateKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/date", unknown>>;
type _DataParserDate<GenericDefinition extends DataParserDefinitionDate> = (DataParser<GenericDefinition, DDate.TheDate, DDate.TheDate | Date | DDate.SerializedTheDate> & Kind<typeof dateKind.definition>);
export interface DataParserDate<GenericDefinition extends DataParserDefinitionDate = DataParserDefinitionDate> extends _DataParserDate<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserDateCheckers,
        ...DataParserDateCheckers[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserDateCheckers,
        ...DataParserDateCheckers[]
    ], GenericChecker>): DataParserDate<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
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
export declare function date<const GenericDefinition extends Partial<DataParserDefinitionDate> = never>(definition?: GenericDefinition): DataParserDate<MergeDefinition<DataParserDefinitionDate, NeverCoalescing<GenericDefinition, {}>>>;
export declare namespace date {
    var overrideHandler: import("../../common").OverrideHandler<DataParserDate<DataParserDefinitionDate>>;
}
export {};
