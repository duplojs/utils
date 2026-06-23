import { type DataParserError } from "../../../../dataParser/error";
import { type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";
import * as DDate from "../../../../date";
export interface DataParserCheckerDefinitionTimeMin extends DataParserCheckerDefinition {
    min: DDate.TheTime;
}
export declare const checkerTimeMinKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-time-min", unknown>>;
declare const DataParserCheckerTimeMin_base: import("../../..").DataParserCheckerBaseInit<import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-time-min", unknown>>>;
export declare class DataParserCheckerTimeMin extends DataParserCheckerTimeMin_base<DataParserCheckerDefinitionTimeMin, DDate.TheTime> {
    get classConstructor(): typeof DataParserCheckerTimeMin & import("../../..").CheckedConstructorKind;
    isAsynchronous(): boolean;
    static execCheck(value: DDate.TheTime, error: DataParserError, self: DataParserCheckerTimeMin, dataParser: DataParser): unknown;
    /**
     * Creates a checker that enforces a minimum `TheTime` bound.
     * 
     * Signature: `checkerTimeMin(min, definition?)` → `DataParserCheckerTimeMin`
     * 
     * The checker passes when parsed value is greater than or equal to `min`.
     * 
     * ```ts
     * const parser = DP.time({
     * 	checkers: [DP.checkerTimeMin(D.createTime(1, "minute"))],
     * });
     * 
     * const valid = parser.parse("time1500+");
     * // valid: Error<DP.DataParserError> | Success<D.TheTime>
     * 
     * const invalid = parser.parse("time500+");
     * // invalid:Error<DP.DataParserError> | Success<D.TheTime>
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
    static create(min: DDate.TheTime, definition?: Partial<Omit<DataParserCheckerDefinitionTimeMin, "min">>): DataParserCheckerTimeMin;
}
export declare const checkerTimeMin: typeof DataParserCheckerTimeMin.create;
export {};
