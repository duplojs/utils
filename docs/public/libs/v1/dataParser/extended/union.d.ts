import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing } from "../../common";
import { type DataParserBaseExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition, type PrepareDataParserDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Input, type Output, type DataParserChecker } from "../base";
type _DataParserUnionExtended<GenericDefinition extends dataParsers.DataParserDefinitionUnion> = (Kind<typeof dataParsers.unionKind.definition> & DataParserBaseExtended<GenericDefinition, Output<dataParsers.DataParserUnion<GenericDefinition>>, Input<dataParsers.DataParserUnion<GenericDefinition>>>);
export interface DataParserUnionExtended<GenericDefinition extends dataParsers.DataParserDefinitionUnion = dataParsers.DataParserDefinitionUnion> extends _DataParserUnionExtended<GenericDefinition> {
    addChecker<const GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
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
export declare function union<const GenericOptions extends dataParsers.UnionOptions, const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionUnion<Output<GenericOptions[number]>>, "options"> = never>(options: GenericOptions, definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionUnion<Output<GenericOptions[number]>>, "options">, GenericDefinition>): DataParserUnionExtended<MergeDefinition<dataParsers.DataParserDefinitionUnion, NeverCoalescing<GenericDefinition, {}> & {
    options: GenericOptions;
}>>;
export declare namespace union {
    var overrideHandler: import("../../common").OverrideHandler<DataParserUnionExtended<dataParsers.DataParserDefinitionUnion<unknown>>>;
}
export {};
