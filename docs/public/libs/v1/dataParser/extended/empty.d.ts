import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../common";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParserChecker } from "../baseChecker";
declare const DataParserEmptyExtended_base: import("..").DataParserExtendedBaseInit<typeof dataParsers.DataParserEmpty>;
export declare class DataParserEmptyExtended<GenericDefinition extends dataParsers.DataParserDefinitionEmpty = dataParsers.DataParserDefinitionEmpty> extends DataParserEmptyExtended_base<GenericDefinition, Output<dataParsers.DataParserEmpty<GenericDefinition>>, Input<dataParsers.DataParserEmpty<GenericDefinition>>> {
    get classConstructor(): typeof DataParserEmptyExtended & import("..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserEmptyExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine: (theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>) => DataParserEmptyExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
    /**
     * Creates an extended data parser that accepts undefined.
     * 
     * **Supported call styles:**
     * - Method: `DPE.empty(definition?)` -> returns an empty parser
     * 
     * Accepts undefined (or the string "undefined" when coerce is enabled).
     * 
     * ```ts
     * const parser = DPE.empty();
     * const result = parser.parse(undefined);
     * if (E.isRight(result)) {
     * 	// E.Success<undefined>
     * }
     * 
     * const coerceParser = DPE.coerce.empty();
     * const coerceResult = coerceParser.parse("undefined");
     * 
     * const optionalEmpty = DPE.empty().optional();
     * const optionalResult = optionalEmpty.parse(undefined);
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/empty
     * 
     * @namespace DPE
     * 
     */
    static create<const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionEmpty> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionEmpty>, GenericDefinition>): DataParserEmptyExtended<MergeDefinition<dataParsers.DataParserDefinitionEmpty, NeverCoalescing<GenericDefinition, {}>>>;
}
/**
 * Creates an extended data parser that accepts undefined.
 * 
 * **Supported call styles:**
 * - Method: `DPE.empty(definition?)` -> returns an empty parser
 * 
 * Accepts undefined (or the string "undefined" when coerce is enabled).
 * 
 * ```ts
 * const parser = DPE.empty();
 * const result = parser.parse(undefined);
 * if (E.isRight(result)) {
 * 	// E.Success<undefined>
 * }
 * 
 * const coerceParser = DPE.coerce.empty();
 * const coerceResult = coerceParser.parse("undefined");
 * 
 * const optionalEmpty = DPE.empty().optional();
 * const optionalResult = optionalEmpty.parse(undefined);
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/empty
 * 
 * @namespace DPE
 * 
 */
export declare const empty: typeof DataParserEmptyExtended.create;
export {};
