import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";
import { type TheDate } from "../../date";
type _DataParserDateExtended<GenericDefinition extends dataParsers.DataParserDefinitionDate> = (Kind<typeof dataParsers.dateKind.definition> & DataParserExtended<GenericDefinition, TheDate, TheDate>);
export interface DataParserDateExtended<GenericDefinition extends dataParsers.DataParserDefinitionDate = dataParsers.DataParserDefinitionDate> extends _DataParserDateExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserDateCheckers,
        ...dataParsers.DataParserDateCheckers[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserDateCheckers,
        ...dataParsers.DataParserDateCheckers[]
    ], GenericChecker>): DataParserDateExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserDateExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
}
/**
 * Creates an extended parser for `TheDate`.
 * 
 * Signature: `DPE.date(definition?)` → `DataParserDateExtended`
 * 
 * This parser extends classic `DP.date(...)` behavior and keeps the extended chainable base API (`nullable`, `optional`, `pipe`, `transform`, etc.).
 * 
 * ```ts
 * const parser = DPE.date();
 * const result = parser.parse("date0+");
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: TheDate
 * }
 * 
 * const coerceParser = DPE.coerce.date();
 * const coerceResult = coerceParser.parse("2024-01-01T00:00:00.000Z");
 * // coerceResult: E.Error<DP.DataParserError> | E.Success<TheDate>
 * 
 * const nullableDate = DPE.date().nullable();
 * const nullableResult = nullableDate.parse(null);
 * // nullableResult: E.Error<DPE.DataParserError> | E.Success<TheDate | null>
 * ```
 * 
 * @remarks
 * - Parsed output is always `TheDate`.
 * - `DPE.coerce.date()` enables coercion by default.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/date
 * 
 * @namespace DPE
 * 
 */
export declare function date<const GenericDefinition extends Partial<dataParsers.DataParserDefinitionDate> = never>(definition?: GenericDefinition): DataParserDateExtended<MergeDefinition<dataParsers.DataParserDefinitionDate, NeverCoalescing<GenericDefinition, {}>>>;
export declare namespace date {
    var overrideHandler: import("../../common").OverrideHandler<DataParserDateExtended<dataParsers.DataParserDefinitionDate>>;
}
export {};
