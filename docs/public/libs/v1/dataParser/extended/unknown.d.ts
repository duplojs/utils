import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Input, type Output } from "../base";
type _DataParserUnknownExtended<GenericDefinition extends dataParsers.DataParserDefinitionUnknown> = (Kind<typeof dataParsers.unknownKind.definition> & DataParserExtended<GenericDefinition, Output<dataParsers.DataParserUnknown<GenericDefinition>>, Input<dataParsers.DataParserUnknown<GenericDefinition>>>);
export interface DataParserUnknownExtended<GenericDefinition extends dataParsers.DataParserDefinitionUnknown = dataParsers.DataParserDefinitionUnknown> extends _DataParserUnknownExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserUnknownCheckers,
        ...dataParsers.DataParserUnknownCheckers[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserUnknownCheckers,
        ...dataParsers.DataParserUnknownCheckers[]
    ], GenericChecker>): DataParserUnknownExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserUnknownExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
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
export declare function unknown<const GenericDefinition extends Partial<dataParsers.DataParserDefinitionUnknown> = never>(definition?: GenericDefinition): DataParserUnknownExtended<MergeDefinition<dataParsers.DataParserDefinitionUnknown, NeverCoalescing<GenericDefinition, {}>>>;
export declare namespace unknown {
    var overrideHandler: import("../../common").OverrideHandler<DataParserUnknownExtended<dataParsers.DataParserDefinitionUnknown>>;
}
export {};
