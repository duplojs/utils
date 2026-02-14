import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing, type SimplifyTopLevel } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition, type DataParsers } from "../types";
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
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserTupleExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
    /**
     * Adds a minimum length checker to a tuple parser.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.min(min, definition?)` -> returns a tuple parser
     * 
     * Ensures the parsed tuple has at least the given number of items.
     * 
     * ```ts
     * const parser = DPE.tuple([DPE.string(), DPE.number()]).min(2);
     * const result = parser.parse(["id", 42]);
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: [string, number]
     * }
     * 
     * const withRest = DPE.tuple([DPE.string()], { rest: DPE.number() }).min(2);
     * const withRestResult = withRest.parse(["a", 1, 2]);
     * 
     * const withMessage = DPE.tuple(
     * 	[DPE.boolean()],
     * ).min(1, { errorMessage: "tuple.too-short" });
     * const withMessageResult = withMessage.parse([true]);
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/tuple
     * 
     * @namespace DPE
     * 
     */
    min(min: number, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionArrayMin, "min">>): DataParserTupleExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.DataParserCheckerArrayMin]>>;
    /**
     * Adds a maximum length checker to a tuple parser.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.max(max, definition?)` -> returns a tuple parser
     * 
     * Ensures the parsed tuple has at most the given number of items.
     * 
     * ```ts
     * const parser = DPE.tuple([DPE.string(), DPE.number()]).max(2);
     * const result = parser.parse(["id", 42]);
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: [string, number]
     * }
     * 
     * const withRest = DPE.tuple([DPE.string()], { rest: DPE.number() }).max(3);
     * const withRestResult = withRest.parse(["a", 1, 2]);
     * 
     * const withMessage = DPE.tuple(
     * 	[DPE.boolean(), DPE.boolean()],
     * ).max(2, { errorMessage: "tuple.too-long" });
     * const withMessageResult = withMessage.parse([true, false]);
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/tuple
     * 
     * @namespace DPE
     * 
     */
    max(max: number, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionArrayMax, "max">>): DataParserTupleExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.DataParserCheckerArrayMax]>>;
    /**
     * Adds or replaces the rest parser of a tuple parser.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.rest(dataParser)` -> returns a tuple parser
     * 
     * Returns a new tuple parser where items after the fixed shape are validated by the provided parser.
     * 
     * ```ts
     * const parser = DPE.tuple([DPE.string()]).rest(DPE.number());
     * const result = parser.parse(["id", 1, 2]);
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: [string, ...number[]]
     * }
     * 
     * const boolTail = DPE.tuple([DPE.boolean()]).rest(DPE.boolean());
     * const boolTailResult = boolTail.parse([true, false, true]);
     * 
     * const chained = DPE.tuple([DPE.string()])
     * 	.rest(DPE.number())
     * 	.min(2)
     * 	.max(4);
     * const chainedResult = chained.parse(["a", 1, 2]);
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/tuple
     * 
     * @namespace DPE
     * 
     */
    rest<GenericDataParser extends DataParsers>(dataParser: GenericDataParser): DataParserTupleExtended<SimplifyTopLevel<Omit<GenericDefinition, "rest"> & {
        readonly rest: GenericDataParser;
    }>>;
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
