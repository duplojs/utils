import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Input, type Output } from "../base";
type _DataParserTupleExtended<GenericDefinition extends dataParsers.DataParserDefinitionTuple> = (Kind<typeof dataParsers.tupleKind.definition> & DataParserExtended<GenericDefinition, Output<dataParsers.DataParserTuple<GenericDefinition>>, Input<dataParsers.DataParserTuple<GenericDefinition>>>);
export interface DataParserTupleExtended<GenericDefinition extends dataParsers.DataParserDefinitionTuple = dataParsers.DataParserDefinitionTuple> extends _DataParserTupleExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserTupleCheckers<Output<this>>,
        ...dataParsers.DataParserTupleCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserTupleCheckers<Output<this>>,
        ...dataParsers.DataParserTupleCheckers<Output<this>>[]
    ], GenericChecker>): DataParserTupleExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    /**
     * @deprecated Method with unreliable typing.
     */
    construct<const GenericDefinition extends dataParsers.DataParserDefinitionTuple>(definition: GenericDefinition): DataParserTupleExtended<MergeDefinition<dataParsers.DataParserDefinitionTuple, GenericDefinition>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserTupleExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.CheckerRefineImplementation<Output<this>>
    ]>>;
    min(min: number, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionArrayMin, "min">>): DataParserTupleExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.DataParserCheckerArrayMin
    ]>>;
    max(max: number, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionArrayMax, "max">>): DataParserTupleExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.DataParserCheckerArrayMax
    ]>>;
}
/**
 * Creates an extended data parser for tuples with a fixed shape.
 * 
 * **Supported call styles:**
 * - Method: `DPE.tuple(shape, definition?)` -> returns a tuple parser
 * 
 * Validates array inputs against the provided tuple shape, with an optional rest parser.
 * 
 * ```ts
 * const parser = DPE.tuple([DPE.string(), DPE.number()]);
 * const result = parser.parse(["id", 42]);
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: [string, number]
 * }
 * 
 * const withRest = DPE.tuple([DPE.string()], { rest: DPE.number() });
 * const restResult = withRest.parse(["a", 1, 2]);
 * 
 * const bools = DPE.tuple([DPE.boolean(), DPE.boolean()]);
 * const boolResult = bools.parse([true, false]);
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/tuple
 * 
 * @namespace DPE
 * 
 */
export declare function tuple<GenericShape extends dataParsers.TupleShape, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionTuple, "shape">> = never>(shape: GenericShape, definition?: GenericDefinition): DataParserTupleExtended<MergeDefinition<dataParsers.DataParserDefinitionTuple, NeverCoalescing<GenericDefinition, {}> & {
    shape: GenericShape;
}>>;
export declare namespace tuple {
    var overrideHandler: import("../../common").OverrideHandler<DataParserTupleExtended<dataParsers.DataParserDefinitionTuple>>;
}
export {};
