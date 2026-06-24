import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../common";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParserChecker } from "../baseChecker";
declare const DataParserNilExtended_base: import("..").DataParserExtendedBaseInit<typeof dataParsers.DataParserNil>;
export declare class DataParserNilExtended<GenericDefinition extends dataParsers.DataParserDefinitionNil = dataParsers.DataParserDefinitionNil> extends DataParserNilExtended_base<GenericDefinition, Output<dataParsers.DataParserNil<GenericDefinition>>, Input<dataParsers.DataParserNil<GenericDefinition>>> {
    get classConstructor(): typeof DataParserNilExtended & import("..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserNilExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine: (theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>) => DataParserNilExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
    /**
     * Creates an extended data parser that accepts null.
     * 
     * **Supported call styles:**
     * - Method: `DPE.nil(definition?)` -> returns a nil parser
     * 
     * Accepts null (or the string "null" when coerce is enabled).
     * 
     * ```ts
     * const parser = DPE.nil();
     * const result = parser.parse(null);
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: null
     * }
     * 
     * const coerceParser = DPE.coerce.nil();
     * const coerceResult = coerceParser.parse("null");
     * 
     * const nullableNil = DPE.nil().nullable();
     * const nullableResult = nullableNil.parse(null);
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/nil
     * 
     * @namespace DPE
     * 
     */
    static create<const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionNil> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionNil>, GenericDefinition>): DataParserNilExtended<MergeDefinition<dataParsers.DataParserDefinitionNil, NeverCoalescing<GenericDefinition, {}>>>;
}
/**
 * Creates an extended data parser that accepts null.
 * 
 * **Supported call styles:**
 * - Method: `DPE.nil(definition?)` -> returns a nil parser
 * 
 * Accepts null (or the string "null" when coerce is enabled).
 * 
 * ```ts
 * const parser = DPE.nil();
 * const result = parser.parse(null);
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: null
 * }
 * 
 * const coerceParser = DPE.coerce.nil();
 * const coerceResult = coerceParser.parse("null");
 * 
 * const nullableNil = DPE.nil().nullable();
 * const nullableResult = nullableNil.parse(null);
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/nil
 * 
 * @namespace DPE
 * 
 */
export declare const nil: typeof DataParserNilExtended.create;
export {};
