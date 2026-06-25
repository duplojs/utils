import { type FixDeepFunctionInfer, type IsEqual, type NeverCoalescing, type Or, type SimplifyTopLevel } from "../../common";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParsers } from "../types/dataParsers";
import { type DataParserChecker } from "../baseChecker";
declare const DataParserTupleExtended_base: import("..").DataParserExtendedBaseInit<typeof dataParsers.DataParserTuple>;
export declare class DataParserTupleExtended<GenericDefinition extends dataParsers.DataParserDefinitionTuple = dataParsers.DataParserDefinitionTuple> extends DataParserTupleExtended_base<GenericDefinition, Output<dataParsers.DataParserTuple<GenericDefinition>>, Input<dataParsers.DataParserTuple<GenericDefinition>>> {
    get classConstructor(): typeof DataParserTupleExtended & import("..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserTupleExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine: (theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>) => DataParserTupleExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
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
    min(min: number, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionArrayMin, "min">>): DataParserTupleExtended<SimplifyTopLevel<Omit<GenericDefinition, "checkers"> & {
        readonly checkers: readonly [...GenericDefinition["checkers"], dataParsers.DataParserCheckerArrayMin<number>];
    }>>;
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
    max(max: number, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionArrayMax, "max">>): DataParserTupleExtended<SimplifyTopLevel<Omit<GenericDefinition, "checkers"> & {
        readonly checkers: readonly [...GenericDefinition["checkers"], dataParsers.DataParserCheckerArrayMax<number>];
    }>>;
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
    static create<const GenericShape extends dataParsers.TupleShape, const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionTuple<dataParsers.DataParserTupleShapeOutput<GenericShape, GenericDefinition["rest"]>>, "shape"> = never>(shape: GenericShape, definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionTuple<dataParsers.DataParserTupleShapeOutput<GenericShape, GenericDefinition["rest"]>>, "shape">, GenericDefinition>): DataParserTupleExtended<MergeDefinition<dataParsers.DataParserDefinitionTuple, NeverCoalescing<GenericDefinition, {}> & {
        readonly shape: GenericShape;
        readonly rest: Or<[
            IsEqual<GenericDefinition["rest"], unknown>,
            IsEqual<GenericDefinition, never>
        ]> extends true ? undefined : GenericDefinition["rest"];
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
export declare const tuple: typeof DataParserTupleExtended.create;
export {};
