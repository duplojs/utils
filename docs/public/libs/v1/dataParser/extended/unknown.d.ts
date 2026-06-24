import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../common";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParserChecker } from "../baseChecker";
declare const DataParserUnknownExtended_base: import("..").DataParserExtendedBaseInit<typeof dataParsers.DataParserUnknown>;
export declare class DataParserUnknownExtended<GenericDefinition extends dataParsers.DataParserDefinitionUnknown = dataParsers.DataParserDefinitionUnknown> extends DataParserUnknownExtended_base<GenericDefinition, Output<dataParsers.DataParserUnknown<GenericDefinition>>, Input<dataParsers.DataParserUnknown<GenericDefinition>>> {
    get classConstructor(): typeof DataParserUnknownExtended & import("..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserUnknownExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine: (theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>) => DataParserUnknownExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
    /**
     * Creates an extended data parser that accepts any value.
     * 
     * **Supported call styles:**
     * - Method: `DPE.unknown(definition?)` -> returns an unknown parser
     * 
     * Always succeeds, returning the input value as unknown.
     * 
     * ```ts
     * const parser = DPE.unknown();
     * const result = parser.parse({ any: "value" });
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: unknown
     * }
     * 
     * const numberResult = parser.parse(123);
     * 
     * const nullResult = parser.parse(null);
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/unknown
     * 
     * @namespace DPE
     * 
     */
    static create<const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionUnknown> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionUnknown>, GenericDefinition>): DataParserUnknownExtended<MergeDefinition<dataParsers.DataParserDefinitionUnknown, NeverCoalescing<GenericDefinition, {}>>>;
}
/**
 * Creates an extended data parser that accepts any value.
 * 
 * **Supported call styles:**
 * - Method: `DPE.unknown(definition?)` -> returns an unknown parser
 * 
 * Always succeeds, returning the input value as unknown.
 * 
 * ```ts
 * const parser = DPE.unknown();
 * const result = parser.parse({ any: "value" });
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: unknown
 * }
 * 
 * const numberResult = parser.parse(123);
 * 
 * const nullResult = parser.parse(null);
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/unknown
 * 
 * @namespace DPE
 * 
 */
export declare const unknown: typeof DataParserUnknownExtended.create;
export {};
