import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Input, type Output } from "../base";
type _DataParserUnionExtended<GenericDefinition extends dataParsers.DataParserDefinitionUnion> = (Kind<typeof dataParsers.unionKind.definition> & DataParserExtended<GenericDefinition, Output<dataParsers.DataParserUnion<GenericDefinition>>, Input<dataParsers.DataParserUnion<GenericDefinition>>>);
export interface DataParserUnionExtended<GenericDefinition extends dataParsers.DataParserDefinitionUnion = dataParsers.DataParserDefinitionUnion> extends _DataParserUnionExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserUnionCheckers<Output<this>>,
        ...dataParsers.DataParserUnionCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserUnionCheckers<Output<this>>,
        ...dataParsers.DataParserUnionCheckers<Output<this>>[]
    ], GenericChecker>): DataParserUnionExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserUnionExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
}
/**
 * Creates an extended data parser that accepts one of multiple parsers.
 * 
 * **Supported call styles:**
 * - Method: `DPE.union(options, definition?)` -> returns a union parser
 * 
 * Tries each option in order until one succeeds, then returns its output.
 * 
 * ```ts
 * const parser = DPE.union([DPE.string(), DPE.number()]);
 * const result = parser.parse("hello");
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: string | number
 * }
 * 
 * const literals = DPE.union([DPE.literal("on"), DPE.literal("off")]);
 * const literalResult = literals.parse("off");
 * 
 * const mixed = DPE.union([DPE.number(), DPE.boolean()]);
 * const mixedResult = mixed.parse(true);
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/union
 * 
 * @namespace DPE
 * 
 */
export declare function union<GenericOptions extends dataParsers.UnionOptions, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionUnion, "options">> = never>(options: GenericOptions, definition?: GenericDefinition): DataParserUnionExtended<MergeDefinition<dataParsers.DataParserDefinitionUnion, NeverCoalescing<GenericDefinition, {}> & {
    options: GenericOptions;
}>>;
export declare namespace union {
    var overrideHandler: import("../../common").OverrideHandler<DataParserUnionExtended<dataParsers.DataParserDefinitionUnion>>;
}
export {};
