import { type Kind } from "../../../../common";
import { type DataParserCheckerDefinition, type DataParserChecker } from "../../../../dataParser/base";
import * as DDate from "../../../../date";
export interface DataParserCheckerDefinitionTimeMax extends DataParserCheckerDefinition {
    max: DDate.TheTime;
}
export declare const checkerTimeMaxKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-time-max", unknown>>;
type _DataParserCheckerTimeMax = (Kind<typeof checkerTimeMaxKind.definition> & DataParserChecker<DataParserCheckerDefinitionTimeMax, DDate.TheTime>);
export interface DataParserCheckerTimeMax extends _DataParserCheckerTimeMax {
}
/**
 * Creates a checker that enforces a maximum `TheTime` bound.
 * 
 * Signature: `checkerTimeMax(max, definition?)` → `DataParserCheckerTimeMax`
 * 
 * The checker passes when parsed value is less than or equal to `max`.
 * 
 * ```ts
 * const parser = DP.time({
 * 	checkers: [DP.checkerTimeMax(D.createTime(2, "minute"))],
 * });
 * 
 * const valid = parser.parse("time1500+");
 * // valid: Error<DP.DataParserError> | Success<D.TheTime>
 * 
 * const invalid = parser.parse("time2500+");
 * // invalid: Error<DP.DataParserError> | Success<D.TheTime>
 * 
 * ```
 * 
 * @remarks
 * - Designed to be used in `DP.time({ checkers: [...] })` or via `.addChecker(...)`.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/time
 * 
 * @namespace DP
 * 
 */
export declare function checkerTimeMax(max: DDate.TheTime, definition?: Partial<Omit<DataParserCheckerDefinitionTimeMax, "max">>): DataParserCheckerTimeMax;
export {};
