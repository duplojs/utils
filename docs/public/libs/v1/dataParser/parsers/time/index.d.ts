import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer } from "../../../common";
import { type DataParserDefinition, type DataParserBase, type Output, type DataParserChecker } from "../../base";
import { type GetEligibleChecker, type AddCheckersToDefinition, type MergeDefinition, type PrepareDataParserDefinition } from "../../../dataParser/types";
import * as DDate from "../../../date";
export * from "./checkers";
export type DataParserTimeCheckers = GetEligibleChecker<DDate.TheTime>;
export interface DataParserDefinitionTime extends DataParserDefinition<DataParserTimeCheckers> {
    readonly coerce: boolean;
}
export declare const timeKind: import("../../../common").KindHandler<import("../../../common").KindDefinition<"@DuplojsUtilsDataParser/time", unknown>>;
type _DataParserTime<GenericDefinition extends DataParserDefinitionTime> = (DataParserBase<GenericDefinition, DDate.TheTime, DDate.TheTime | number | DDate.SerializedTheTime> & Kind<typeof timeKind.definition>);
export interface DataParserTime<GenericDefinition extends DataParserDefinitionTime = DataParserDefinitionTime> extends _DataParserTime<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>): DataParserTime<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
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
export declare function time<const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionTime> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<DataParserDefinitionTime>, GenericDefinition>): DataParserTime<MergeDefinition<DataParserDefinitionTime, NeverCoalescing<GenericDefinition, {}>>>;
export declare namespace time {
    var overrideHandler: import("../../../common").OverrideHandler<DataParserTime<DataParserDefinitionTime>>;
}
