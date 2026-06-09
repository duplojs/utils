import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../common";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParserChecker } from "../baseChecker";
import { type TheTime } from "../../date";
declare const DataParserTimeExtended_base: import("..").DataParserExtendedBaseInit<typeof dataParsers.DataParserTime>;
export declare class DataParserTimeExtended<GenericDefinition extends dataParsers.DataParserDefinitionTime = dataParsers.DataParserDefinitionTime> extends DataParserTimeExtended_base<GenericDefinition, Output<dataParsers.DataParserTime<GenericDefinition>>, Input<dataParsers.DataParserTime<GenericDefinition>>> {
    get classConstructor(): typeof DataParserTimeExtended & import("..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserTimeExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine: (theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>) => DataParserTimeExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
    /**
     * Adds a minimum time checker to a time parser.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.min(min, definition?)` -> returns a time parser
     * 
     * Ensures the time is greater than the provided minimum.
     * 
     * ```ts
     * const timeMin = D.createTime(0, "millisecond");
     * const timeMax = D.createTime(100, "millisecond");
     * 
     * const parser = DPE.time().min(timeMin);
     * const result = parser.parse("time10+");
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: TheTime
     * }
     * 
     * const withMessage = DPE.time().min(timeMin, { errorMessage: "time.too-small" });
     * const messageResult = withMessage.parse("time0+");
     * 
     * const chained = DPE.time().min(timeMin).max(timeMax);
     * const chainedResult = chained.parse("time10+");
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/time
     * 
     * @namespace DPE
     * 
     */
    min(min: TheTime, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionTimeMin, "min">>): DataParserTimeExtended<import("../../common").SimplifyTopLevel<Omit<GenericDefinition, "checkers"> & {
        readonly checkers: readonly [...GenericDefinition["checkers"], dataParsers.DataParserCheckerTimeMin];
    }>>;
    /**
     * Adds a maximum time checker to a time parser.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.max(max, definition?)` -> returns a time parser
     * 
     * Ensures the time is smaller than the provided maximum.
     * 
     * ```ts
     * const timeMax = D.createTime(1, "second");
     * const timeMin = D.createTime(0, "millisecond");
     * 
     * const parser = DPE.time().max(timeMax);
     * const result = parser.parse("time10+");
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: TheTime
     * }
     * 
     * const withMessage = DPE.time().max(timeMax, { errorMessage: "time.too-large" });
     * const messageResult = withMessage.parse("time100+");
     * 
     * const chained = DPE.time().min(timeMin).max(timeMax);
     * const chainedResult = chained.parse("time10+");
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/time
     * 
     * @namespace DPE
     * 
     */
    max(max: TheTime, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionTimeMax, "max">>): DataParserTimeExtended<import("../../common").SimplifyTopLevel<Omit<GenericDefinition, "checkers"> & {
        readonly checkers: readonly [...GenericDefinition["checkers"], dataParsers.DataParserCheckerTimeMax];
    }>>;
    /**
     * Creates an extended parser for `TheTime` with chainable time-specific helpers.
     * 
     * Signature: `DPE.time(definition?)` → `DataParserTimeExtended`
     * 
     * This parser extends the classic time parser behavior and adds fluent methods like `.min(...)` and `.max(...)`.
     * 
     * ```ts
     * const minTime = D.createTime(0, "millisecond");
     * const maxTime = D.createTime(10000, "millisecond");
     * 
     * const parser = DPE.time()
     * 	.min(minTime)
     * 	.max(maxTime);
     * const result = parser.parse("time10+");
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: TheTime
     * }
     * 
     * const coerceParser = DPE.coerce.time();
     * const coerceResult = coerceParser.parse("10:20:00");
     * // E.Error<DPE.DataParserError> | E.Success<D.TheTime>
     * 
     * const minOnly = DPE.time().min(minTime);
     * const minResult = minOnly.parse("time0+");
     * // E.Error<DPE.DataParserError> | E.Success<D.TheTime>
     * ```
     * 
     * @remarks
     * - `.min(...)` and `.max(...)` expect `TheTime` values.
     * - `DPE.coerce.time()` enables the same coercion flow as classic parser mode.
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/time
     * 
     * @namespace DPE
     * 
     */
    static create<const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionTime> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionTime>, GenericDefinition>): DataParserTimeExtended<MergeDefinition<dataParsers.DataParserDefinitionTime, NeverCoalescing<GenericDefinition, {}>>>;
}
export declare const time: typeof DataParserTimeExtended.create;
export {};
