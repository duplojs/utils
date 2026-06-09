import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../common";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParserChecker } from "../baseChecker";
declare const DataParserDateExtended_base: import("..").DataParserExtendedBaseInit<typeof dataParsers.DataParserDate>;
export declare class DataParserDateExtended<GenericDefinition extends dataParsers.DataParserDefinitionDate = dataParsers.DataParserDefinitionDate> extends DataParserDateExtended_base<GenericDefinition, Output<dataParsers.DataParserDate<GenericDefinition>>, Input<dataParsers.DataParserDate<GenericDefinition>>> {
    get classConstructor(): typeof DataParserDateExtended & import("..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserDateExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine: (theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>) => DataParserDateExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
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
    static create<const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionDate> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionDate>, GenericDefinition>): DataParserDateExtended<MergeDefinition<dataParsers.DataParserDefinitionDate, NeverCoalescing<GenericDefinition, {}>>>;
}
export declare const date: typeof DataParserDateExtended.create;
export {};
