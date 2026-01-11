import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";
import { type TheTime } from "../../date";
type _DataParserTimeExtended<GenericDefinition extends dataParsers.DataParserDefinitionTime> = (Kind<typeof dataParsers.timeKind.definition> & DataParserExtended<GenericDefinition, TheTime, TheTime>);
export interface DataParserTimeExtended<GenericDefinition extends dataParsers.DataParserDefinitionTime = dataParsers.DataParserDefinitionTime> extends _DataParserTimeExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserTimeCheckers,
        ...dataParsers.DataParserTimeCheckers[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserTimeCheckers,
        ...dataParsers.DataParserTimeCheckers[]
    ], GenericChecker>): DataParserTimeExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    /**
     * @deprecated Method with unreliable typing.
     */
    construct<const GenericDefinition extends dataParsers.DataParserDefinitionTime>(definition: GenericDefinition): DataParserTimeExtended<MergeDefinition<dataParsers.DataParserDefinitionTime, GenericDefinition>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserTimeExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.CheckerRefineImplementation<Output<this>>
    ]>>;
    /**
     * Adds a minimum time checker to a time parser.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.min(min, definition?)` -> returns a time parser
     * 
     * Ensures the time is greater than the provided minimum.
     * 
     * ```ts
     * const parser = DPE.time().min("time0+");
     * const result = parser.parse("time10+");
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: TheTime
     * }
     * 
     * const withMessage = DPE.time().min("time0+", { errorMessage: "time.too-small" });
     * const messageResult = withMessage.parse("time0+");
     * 
     * const chained = DPE.time().min("time0+").max("time100+");
     * const chainedResult = chained.parse("time10+");
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/time
     * 
     * @namespace DPE
     * 
     */
    min(min: TheTime, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionTimeMin, "min">>): DataParserTimeExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.DataParserCheckerTimeMin
    ]>>;
    /**
     * Adds a maximum time checker to a time parser.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.max(max, definition?)` -> returns a time parser
     * 
     * Ensures the time is smaller than the provided maximum.
     * 
     * ```ts
     * const parser = DPE.time().max("time100+");
     * const result = parser.parse("time10+");
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: TheTime
     * }
     * 
     * const withMessage = DPE.time().max("time100+", { errorMessage: "time.too-large" });
     * const messageResult = withMessage.parse("time100+");
     * 
     * const chained = DPE.time().min("time0+").max("time100+");
     * const chainedResult = chained.parse("time10+");
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/time
     * 
     * @namespace DPE
     * 
     */
    max(max: TheTime, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionTimeMax, "max">>): DataParserTimeExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.DataParserCheckerTimeMax
    ]>>;
}
/**
 * Creates an extended data parser for TheTime values.
 * 
 * **Supported call styles:**
 * - Method: `DPE.time(definition?)` -> returns a time parser
 * 
 * Validates TheTime values and exposes time-specific methods like min and max.
 * 
 * ```ts
 * const parser = DPE.time().min("time0+").max("time100+");
 * const result = parser.parse("time10+");
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: TheTime
 * }
 * 
 * const coerceParser = DPE.coerce.time();
 * const coerceResult = coerceParser.parse("10:20:00");
 * 
 * const minOnly = DPE.time().min("time0+");
 * const minResult = minOnly.parse("time0+");
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/time
 * 
 * @namespace DPE
 * 
 */
export declare function time<const GenericDefinition extends Partial<dataParsers.DataParserDefinitionTime> = never>(definition?: GenericDefinition): DataParserTimeExtended<MergeDefinition<dataParsers.DataParserDefinitionTime, NeverCoalescing<GenericDefinition, {}>>>;
export declare namespace time {
    var overrideHandler: import("../../common").OverrideHandler<DataParserTimeExtended<dataParsers.DataParserDefinitionTime>>;
}
export {};
