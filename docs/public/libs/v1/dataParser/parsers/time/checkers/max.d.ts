import { type DataParserError } from "../../../../dataParser/error";
import { type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";
import * as DDate from "../../../../date";
export interface DataParserCheckerDefinitionTimeMax extends DataParserCheckerDefinition {
    max: DDate.TheTime;
}
export declare const checkerTimeMaxKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-time-max", unknown>>;
declare const DataParserCheckerTimeMax_base: import("../../..").DataParserCheckerBaseInit<import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-time-max", unknown>>>;
export declare class DataParserCheckerTimeMax extends DataParserCheckerTimeMax_base<DataParserCheckerDefinitionTimeMax, DDate.TheTime> {
    get classConstructor(): typeof DataParserCheckerTimeMax & import("../../..").CheckedConstructorKind;
    isAsynchronous(): boolean;
    static execCheck(value: DDate.TheTime, error: DataParserError, self: DataParserCheckerTimeMax, dataParser: DataParser): unknown;
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
    static create(max: DDate.TheTime, definition?: Partial<Omit<DataParserCheckerDefinitionTimeMax, "max">>): DataParserCheckerTimeMax;
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
export declare const checkerTimeMax: typeof DataParserCheckerTimeMax.create;
export {};
