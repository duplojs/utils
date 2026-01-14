import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer } from "../../../common";
import { type DataParserDefinition, type DataParser, type DataParserChecker } from "../../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "../../../dataParser/types";
import { type CheckerRefineImplementation } from "../refine";
import { type GetPropsWithValueExtends } from "../../../object";
import { type TheTime } from "../../../date";
import { type DataParserCheckerTimeMax, type DataParserCheckerTimeMin } from "./checkers";
export * from "./checkers";
export interface DataParserTimeCheckerCustom {
}
export type DataParserTimeCheckers = (DataParserTimeCheckerCustom[GetPropsWithValueExtends<DataParserTimeCheckerCustom, DataParserChecker>] | CheckerRefineImplementation<TheTime> | DataParserCheckerTimeMax | DataParserCheckerTimeMin);
export interface DataParserDefinitionTime extends DataParserDefinition<DataParserTimeCheckers> {
    readonly coerce: boolean;
}
export declare const timeKind: import("../../../common").KindHandler<import("../../../common").KindDefinition<"@DuplojsUtilsDataParser/time", unknown>>;
type _DataParserTime<GenericDefinition extends DataParserDefinitionTime> = (DataParser<GenericDefinition, TheTime, TheTime> & Kind<typeof timeKind.definition>);
export interface DataParserTime<GenericDefinition extends DataParserDefinitionTime = DataParserDefinitionTime> extends _DataParserTime<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserTimeCheckers,
        ...DataParserTimeCheckers[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserTimeCheckers,
        ...DataParserTimeCheckers[]
    ], GenericChecker>): DataParserTime<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
}
/**
 * Creates a data parser for TheTime values.
 * 
 * **Supported call styles:**
 * - Classic: `DP.time(definition?)` -> returns a time parser
 * - Curried: not available
 * 
 * Validates that the input is a TheTime, optionally applies coerce, and runs the configured checkers.
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
 * 	checkers: [DP.checkerRefine((value) => value !== "time0+")],
 * });
 * 
 * const coerceParser = DP.coerce.time();
 * const coerceResult = coerceParser.parse("10:20:00");
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/time
 * 
 * @namespace DP
 * 
 */
export declare function time<const GenericDefinition extends Partial<DataParserDefinitionTime> = never>(definition?: GenericDefinition): DataParserTime<MergeDefinition<DataParserDefinitionTime, NeverCoalescing<GenericDefinition, {}>>>;
export declare namespace time {
    var overrideHandler: import("../../../common").OverrideHandler<DataParserTime<DataParserDefinitionTime>>;
}
