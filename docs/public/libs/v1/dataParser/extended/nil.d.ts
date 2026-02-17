import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Input, type Output } from "../base";
type _DataParserNilExtended<GenericDefinition extends dataParsers.DataParserDefinitionNil> = (Kind<typeof dataParsers.nilKind.definition> & DataParserExtended<GenericDefinition, Output<dataParsers.DataParserNil<GenericDefinition>>, Input<dataParsers.DataParserNil<GenericDefinition>>>);
export interface DataParserNilExtended<GenericDefinition extends dataParsers.DataParserDefinitionNil = dataParsers.DataParserDefinitionNil> extends _DataParserNilExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserNilCheckers,
        ...dataParsers.DataParserNilCheckers[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserNilCheckers,
        ...dataParsers.DataParserNilCheckers[]
    ], GenericChecker>): DataParserNilExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserNilExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
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
export declare function nil<const GenericDefinition extends Partial<dataParsers.DataParserDefinitionNil> = never>(definition?: GenericDefinition): DataParserNilExtended<MergeDefinition<dataParsers.DataParserDefinitionNil, NeverCoalescing<GenericDefinition, {}>>>;
export declare namespace nil {
    var overrideHandler: import("../../common").OverrideHandler<DataParserNilExtended<dataParsers.DataParserDefinitionNil>>;
}
export {};
