import * as DCommon from "../../common";
import { DataParserBase, type DataParser, type DataParserDefinition } from "../base";
import * as dataParsers from "../parsers";
import { type DataParserError } from "../error";
import { type DataParserChecker, type DataParserCheckerBase, type DataParserCheckerDefinition } from "../baseChecker";
import { type Output, type PrepareDataParserDefinition, type DataParserExtendedBaseInit, type MergeDefinition, type Input, type AddCheckersToDefinition } from "../types";
export declare const dataParserExtendedKind: DCommon.KindHandler<DCommon.KindDefinition<"@DuplojsUtilsDataParser/extended", unknown>>;
declare const DataParserBaseExtended_base: DCommon.KindClass<DCommon.KindHandler<DCommon.KindDefinition<"@DuplojsUtilsDataParser/extended", unknown>>, typeof DataParserBase>;
export declare abstract class DataParserBaseExtended<GenericDefinition extends DataParserDefinition = DataParserDefinition, GenericOutput extends unknown = unknown, GenericInput extends unknown = GenericOutput> extends DataParserBaseExtended_base<DataParserBase<GenericDefinition, GenericOutput, GenericInput>> {
    constructor(definition: GenericDefinition);
    /**
     * The addChecker() method returns a new extended data parser with one or more additional checkers appended.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.addChecker(checker1, checker2)` -> returns a new parser
     * 
     * Checkers are executed after the parser core logic, the original parser is not mutated, and the extended methods remain available.
     * 
     * Checker compatibility is output-based: a checker typed for `T` can be added to a parser whose output type is `T`.
     * 
     * ```ts
     * const withMin = DPE.string()
     * 	.addChecker(DP.checkerStringMin(3));
     * 
     * const withRange = DPE.string()
     * 	.addChecker(
     * 		DP.checkerStringMin(3),
     * 		DP.checkerStringMax(10),
     * 	);
     * 
     * const withRefine = DPE.string()
     * 	.addChecker(DP.checkerRefine((value) => value.startsWith("id:")));
     * ```
     * 
     * @remarks 
     * - In the extended version, validators already expose their own built-in checkers. Before using `addChecker()`, check whether the schema already provides the equivalent method (e.g. prefer `.min()` over `checkerStringMin()`).
     * 
     * @namespace DPE
     * 
     */
    addChecker: (...args: never) => DataParserBaseExtended;
    contractExtended<GenericValue extends unknown>(...args: DCommon.IsEqual<Output<this>, GenericValue> extends true ? [] : [] & DCommon.ComputedTypeError<"ContractExtended error.">): DataParserExtended<GenericValue>;
    refine(theFunction: (input: GenericOutput) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserBaseExtended;
    /**
     * Creates an array parser from the current parser.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.array(definition?)` -> returns an array parser
     * 
     * Wraps the current parser as the array element parser and validates arrays of that element.
     * 
     * ```ts
     * const parser = DPE.string().array();
     * const result = parser.parse(["a", "b"]);
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: string[]
     * }
     * 
     * const withCheckers = DPE.number().array({
     * 	checkers: [DP.checkerArrayMin(1)],
     * });
     * 
     * const nested = DPE.string().array().array();
     * const nestedResult = nested.parse([["a"], ["b"]]);
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/array
     * 
     * @namespace DPE
     * 
     */
    array<GenericThis extends this = this, const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionArray<Output<this>[]>, "element"> = never>(definition?: DCommon.FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionArray<Output<this>[]>, "element">, GenericDefinition>): DataParserArrayExtended<MergeDefinition<dataParsers.DataParserDefinitionArray, DCommon.NeverCoalescing<GenericDefinition, {}> & {
        readonly element: GenericThis;
    }>>;
    /**
     * Transforms the output of the current parser.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.transform(theFunction, definition?)` -> returns a transform parser
     * 
     * Runs the current parser and applies a transformation function to its output.
     * 
     * ```ts
     * const parser = DPE.string().transform((value) => value.length);
     * const result = parser.parse("Duplo");
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: number
     * }
     * 
     * const toUpper = DPE.string().transform(S.toUpperCase);
     * const upperResult = toUpper.parse("duplo");
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/transform
     * 
     * @namespace DPE
     * 
     */
    transform<GenericThis extends this = this, GenericNewOutput extends DCommon.AnyValue = DCommon.AnyValue, const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionTransform<dataParsers.DataParserTransformOutput<() => GenericNewOutput>>, "inner" | "theFunction"> = never>(theFunction: (input: Output<this>, error: DataParserError) => GenericNewOutput, definition?: DCommon.FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionTransform<dataParsers.DataParserTransformOutput<() => GenericNewOutput>>, "inner" | "theFunction">, GenericDefinition>): DataParserTransformExtended<MergeDefinition<dataParsers.DataParserDefinitionTransform, DCommon.NeverCoalescing<GenericDefinition, {}> & {
        inner: GenericThis;
        theFunction(input: Output<GenericThis>, error: DataParserError): GenericNewOutput;
    }>>;
    /**
     * Creates a parser that accepts a value or an array of values.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.arrayCoalescing()` -> returns a union parser
     * 
     * Accepts either a single value (wrapped into an array) or an array of values.
     * 
     * ```ts
     * const parser = DPE.string().arrayCoalescing();
     * const result = parser.parse("a");
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: string[]
     * }
     * 
     * const listResult = parser.parse(["a", "b"]);
     * 
     * const numberParser = DPE.number().arrayCoalescing();
     * const numberResult = numberParser.parse(1);
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/array
     * 
     * @namespace DPE
     * 
     */
    arrayCoalescing<GenericThis extends this = this, const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionUnion<Output<this>[]>, "options"> = never>(definition?: DCommon.FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionUnion<Output<this>[]>, "options">, GenericDefinition>): DataParserUnionExtended<MergeDefinition<dataParsers.DataParserDefinitionUnion, DCommon.NeverCoalescing<GenericDefinition, {}> & {
        readonly options: [
            DataParserArrayExtended<DCommon.SimplifyTopLevel<Omit<dataParsers.DataParserDefinitionArray, "element" | "checkers"> & {
                readonly checkers: readonly [];
                readonly element: GenericThis;
            }>>,
            DataParserTransformExtended<DCommon.SimplifyTopLevel<Omit<dataParsers.DataParserDefinitionTransform, "inner" | "theFunction" | "checkers"> & {
                readonly checkers: readonly [];
                readonly inner: GenericThis;
                theFunction(input: Output<GenericThis>, error: DataParserError): Output<GenericThis>[];
            }>>
        ];
    }>>;
    /**
     * Pipes the output of the current parser into another parser.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.pipe(output, definition?)` -> returns a pipe parser
     * 
     * Runs the current parser, then feeds its output to the output parser.
     * 
     * ```ts
     * const parser = DPE.string().pipe(DPE.coerce.number());
     * const result = parser.parse("42");
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: number
     * }
     * 
     * const toUpper = DPE.string().pipe(
     * 	DP.transform(
     * 		DP.string(),
     * 		(value) => value.toUpperCase(),
     * 	),
     * );
     * const upperResult = toUpper.parse("duplo");
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/pipe
     * 
     * @namespace DPE
     * 
     */
    pipe<GenericThis extends this = this, GenericOutputParser extends DataParser = DataParser, const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionPipe<Output<GenericOutputParser>>, "input" | "output"> = never>(output: GenericOutputParser, definition?: DCommon.FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionPipe<Output<GenericOutputParser>>, "input" | "output">, GenericDefinition>): DataParserPipeExtended<MergeDefinition<dataParsers.DataParserDefinitionPipe, DCommon.NeverCoalescing<GenericDefinition, {}> & {
        input: GenericThis;
        output: GenericOutputParser;
    }>>;
    /**
     * Makes the current parser accept null.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.nullable(definition?)` -> returns a nullable parser
     * 
     * Returns null (or a coalescing value) when input is null, otherwise parses with the current parser.
     * 
     * ```ts
     * const parser = DPE.string().nullable();
     * const result = parser.parse(null);
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: string | null
     * }
     * 
     * const withCoalescing = DPE.number().nullable({ coalescingValue: 0 });
     * const coalesced = withCoalescing.parse(null);
     * 
     * const withCheckers = DPE.boolean().nullable({
     * 	checkers: [DP.checkerRefine((value) => value !== null)],
     * });
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/nullable
     * 
     * @namespace DPE
     * 
     */
    nullable<GenericThis extends this = this, const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionNullable<Output<this>>, "inner"> = never>(definition?: DCommon.FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionNullable<Output<this>>, "inner">, GenericDefinition>): DataParserNullableExtended<MergeDefinition<dataParsers.DataParserDefinitionNullable, DCommon.NeverCoalescing<GenericDefinition, {}> & {
        inner: GenericThis;
    }>>;
    /**
     * Makes the current parser accept undefined.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.optional(definition?)` -> returns an optional parser
     * 
     * Returns undefined (or a coalescing value) when input is undefined, otherwise parses with the current parser.
     * 
     * ```ts
     * const parser = DPE.string().optional();
     * const result = parser.parse(undefined);
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: string | undefined
     * }
     * 
     * const withCoalescing = DPE.number().optional({ coalescingValue: 0 });
     * const coalesced = withCoalescing.parse(undefined);
     * 
     * const withCheckers = DPE.number().optional({
     * 	checkers: [DP.checkerRefine((value) => value !== 13)],
     * });
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/optional
     * 
     * @namespace DPE
     * 
     */
    optional<GenericThis extends this = this, const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionOptional<Output<this>>, "inner"> = never>(definition?: DCommon.FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionOptional<Output<this>>, "inner">, GenericDefinition>): DataParserOptionalExtended<MergeDefinition<dataParsers.DataParserDefinitionOptional, DCommon.NeverCoalescing<GenericDefinition, {}> & {
        inner: GenericThis;
    }>>;
    /**
     * Creates a union parser between the current parser and another parser.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.or(option, definition?)` -> returns a union parser
     * 
     * Tries the current parser, then the option parser if the first fails.
     * 
     * ```ts
     * const parser = DPE.string().or(DPE.number());
     * const result = parser.parse(42);
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: string | number
     * }
     * 
     * const literals = DPE.literal("on").or(DPE.literal("off"));
     * const literalResult = literals.parse("off");
     * 
     * const withCheckers = DPE.string().or(DPE.coerce.number(), {
     * 	checkers: [DP.checkerRefine((value) => value !== "forbidden")],
     * });
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/union
     * 
     * @namespace DPE
     * 
     */
    or<GenericThis extends this = this, GenericDataParser extends DataParser = DataParser, const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionUnion<Output<this | GenericDataParser>>, "options"> = never>(option: GenericDataParser, definition?: DCommon.FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionUnion<Output<this | GenericDataParser>>, "options">, GenericDefinition>): DataParserUnionExtended<MergeDefinition<dataParsers.DataParserDefinitionUnion, DCommon.NeverCoalescing<GenericDefinition, {}> & {
        options: [GenericThis, GenericDataParser];
    }>>;
    /**
     * Recovers with a fallback value when parsing fails.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.recover(recoveredValue, definition?)` -> returns a recover parser
     * 
     * Runs the current parser and returns the recovered value when parsing fails.
     * 
     * ```ts
     * const parser = DPE.number().recover(0);
     * const result = parser.parse("not-a-number");
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: number
     * }
     * 
     * const fallbackString = DPE.string().recover("fallback");
     * const stringResult = fallbackString.parse(123);
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/recover
     * 
     * @namespace DPE
     * 
     */
    recover<GenericThis extends this = this, GenericRecoveredValue extends Output<this> = Output<this>, const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionRecover<Output<this>>, "inner" | "recoveredValue"> = never>(recoveredValue: GenericRecoveredValue, definition?: DCommon.FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionRecover<Output<this>>, "inner" | "recoveredValue">, GenericDefinition>): DataParserRecoverExtended<MergeDefinition<dataParsers.DataParserDefinitionRecover, DCommon.NeverCoalescing<GenericDefinition, {}> & {
        inner: GenericThis;
        recoveredValue: GenericRecoveredValue;
    }>>;
    /**
     * Reassigns issue messages after the current extended parser has run.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.errorHandler(transformers, definition?)` -> returns an error handler parser
     * 
     * Runs the current parser, inspects every produced issue source, and replaces matching messages with the provided transformers.
     * 
     * ```ts
     * const parser = DPE.number({ errorMessage: "invalid number" })
     * 	.errorHandler(
     * 		DP.createErrorMessageTransformer(
     * 			DP.numberKind,
     * 			() => "Expected a valid age.",
     * 		),
     * 	);
     * const result = parser.parse("twenty");
     * if (E.isLeft(result)) {
     * 	const error = unwrap(result);
     * 	// error.issues[0]?.message === "Expected a valid age."
     * }
     * 
     * const objectParser = DPE.object({
     * 	name: DPE.string(),
     * }).errorHandler(DP.createErrorMessageTransformer(DP.stringKind, () => "Expected text."));
     * 
     * ```
     * 
     * @remarks
     * Checkers added directly to the returned error handler run after message rewriting. Issues produced by those checkers keep their own `errorMessage` or the handler `definition.errorMessage`.
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/errorHandler
     * 
     * @namespace DPE
     * 
     */
    errorHandler<GenericThis extends this = this, const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionErrorHandler<Output<this>>, "inner" | "errorMessageTransformers"> = never>(errorMessageTransformers: dataParsers.ErrorMessageTransformer | dataParsers.ErrorMessageTransformer[], definition?: DCommon.FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionErrorHandler<Output<this>>, "inner" | "errorMessageTransformers">, GenericDefinition>): DataParserErrorHandlerExtended<MergeDefinition<dataParsers.DataParserDefinitionErrorHandler, DCommon.NeverCoalescing<GenericDefinition, {}> & {
        inner: GenericThis;
    }>>;
    static initExtended<GenericConstructor extends DCommon.SimplifyTopLevel<ReturnType<typeof DataParserBase.init>>>(dataParserConstructor: GenericConstructor): DataParserExtendedBaseInit<GenericConstructor>;
}
declare const DataParserArrayExtended_base: DataParserExtendedBaseInit<typeof dataParsers.DataParserArray>;
export declare class DataParserArrayExtended<GenericDefinition extends dataParsers.DataParserDefinitionArray = dataParsers.DataParserDefinitionArray> extends DataParserArrayExtended_base<GenericDefinition, Output<dataParsers.DataParserArray<GenericDefinition>>, Input<dataParsers.DataParserArray<GenericDefinition>>> {
    get classConstructor(): typeof DataParserArrayExtended & import("..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: DCommon.FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserArrayExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine: (theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>) => DataParserArrayExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
    /**
     * Adds a minimum length checker to an array parser.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.min(min, definition?)` -> returns an array parser
     * 
     * Ensures the array length is at least the given minimum.
     * 
     * ```ts
     * const parser = DPE.array(DPE.string()).min(2);
     * const result = parser.parse(["a", "b"]);
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: string[]
     * }
     * 
     * const numbers = DPE.array(DPE.number()).min(1);
     * const numbersResult = numbers.parse([1]);
     * 
     * const nested = DPE.array(DPE.array(DPE.boolean())).min(1);
     * const nestedResult = nested.parse([[true]]);
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/array
     * 
     * @namespace DPE
     * 
     */
    min(min: number, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionArrayMin, "min">>): DataParserArrayExtended<DCommon.SimplifyTopLevel<Omit<GenericDefinition, "checkers"> & {
        readonly checkers: readonly [...GenericDefinition["checkers"], dataParsers.DataParserCheckerArrayMin];
    }>>;
    /**
     * Adds a maximum length checker to an array parser.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.max(max, definition?)` -> returns an array parser
     * 
     * Ensures the array length is at most the given maximum.
     * 
     * ```ts
     * const parser = DPE.array(DPE.string()).max(2);
     * const result = parser.parse(["a", "b"]);
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: string[]
     * }
     * 
     * const numbers = DPE.array(DPE.number()).max(3);
     * const numbersResult = numbers.parse([1, 2, 3]);
     * 
     * const nested = DPE.array(DPE.array(DPE.boolean())).max(1);
     * const nestedResult = nested.parse([[true]]);
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/array
     * 
     * @namespace DPE
     * 
     */
    max(max: number, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionArrayMax, "max">>): DataParserArrayExtended<DCommon.SimplifyTopLevel<Omit<GenericDefinition, "checkers"> & {
        readonly checkers: readonly [...GenericDefinition["checkers"], dataParsers.DataParserCheckerArrayMax];
    }>>;
    /**
     * Creates an extended data parser for arrays.
     * 
     * **Supported call styles:**
     * - Method: `DPE.array(element, definition?)` -> returns an array parser
     * 
     * Validates arrays and exposes array-specific methods like min and max.
     * 
     * ```ts
     * const parser = DPE.array(DPE.string()).min(1).max(3);
     * const result = parser.parse(["a", "b"]);
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: string[]
     * }
     * 
     * const numbers = DPE.array(DPE.number()).min(2);
     * const numbersResult = numbers.parse([1, 2, 3]);
     * 
     * const nested = DPE.array(DPE.array(DPE.boolean()));
     * const nestedResult = nested.parse([[true, false]]);
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/array
     * 
     * @namespace DPE
     * 
     */
    static create<GenericElement extends DataParser, const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionArray<Output<GenericElement>[]>, "element"> = never>(element: GenericElement, definition?: DCommon.FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionArray<Output<GenericElement>[]>, "element">, GenericDefinition>): DataParserArrayExtended<MergeDefinition<dataParsers.DataParserDefinitionArray, DCommon.NeverCoalescing<GenericDefinition, {}> & {
        element: GenericElement;
    }>>;
}
declare const DataParserTransformExtended_base: DataParserExtendedBaseInit<typeof dataParsers.DataParserTransform>;
export declare class DataParserTransformExtended<GenericDefinition extends dataParsers.DataParserDefinitionTransform = dataParsers.DataParserDefinitionTransform> extends DataParserTransformExtended_base<GenericDefinition, Output<dataParsers.DataParserTransform<GenericDefinition>>, Input<dataParsers.DataParserTransform<GenericDefinition>>> {
    get classConstructor(): typeof DataParserTransformExtended & import("..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: DCommon.FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserTransformExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine: (theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>) => DataParserTransformExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
    /**
     * Creates an extended transform parser from another parser.
     * 
     * **Supported call styles:**
     * - Method: `DPE.transform(inner, theFunction, definition?)` -> returns a transform parser
     * 
     * Runs the inner parser and applies a transformation function to its output.
     * 
     * ```ts
     * const parser = DPE.transform(DPE.string(), (value) => value.length);
     * const result = parser.parse("Duplo");
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: number
     * }
     * 
     * const toUpper = DPE.transform(DPE.string(), (value) => value.toUpperCase());
     * const upperResult = toUpper.parse("duplo");
     * 
     * const double = DPE.transform(DPE.number(), (value) => value * 2);
     * const doubleResult = double.parse(3);
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/transform
     * 
     * @namespace DPE
     * 
     */
    static create<GenericDataParser extends DataParser, GenericOutput extends unknown, const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionTransform<dataParsers.DataParserTransformOutput<() => GenericOutput>>, "inner" | "theFunction"> = never>(inner: GenericDataParser, theFunction: (input: Output<GenericDataParser>, error: DataParserError) => GenericOutput, definition?: DCommon.FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionTransform<dataParsers.DataParserTransformOutput<() => GenericOutput>>, "inner" | "theFunction">, GenericDefinition>): DataParserTransformExtended<MergeDefinition<dataParsers.DataParserDefinitionTransform, DCommon.NeverCoalescing<GenericDefinition, {}> & {
        inner: GenericDataParser;
        theFunction(input: Output<GenericDataParser>, error: DataParserError): GenericOutput;
    }>>;
}
declare const DataParserUnionExtended_base: DataParserExtendedBaseInit<typeof dataParsers.DataParserUnion>;
export declare class DataParserUnionExtended<GenericDefinition extends dataParsers.DataParserDefinitionUnion = dataParsers.DataParserDefinitionUnion> extends DataParserUnionExtended_base<GenericDefinition, Output<dataParsers.DataParserUnion<GenericDefinition>>, Input<dataParsers.DataParserUnion<GenericDefinition>>> {
    get classConstructor(): typeof DataParserUnionExtended & import("..").CheckedConstructorKind;
    addChecker: <const GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: DCommon.FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserUnionExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine: (theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>) => DataParserUnionExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
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
    static create<const GenericOptions extends dataParsers.UnionOptions, const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionUnion<Output<GenericOptions[number]>>, "options"> = never>(options: GenericOptions, definition?: DCommon.FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionUnion<Output<GenericOptions[number]>>, "options">, GenericDefinition>): DataParserUnionExtended<MergeDefinition<dataParsers.DataParserDefinitionUnion, DCommon.NeverCoalescing<GenericDefinition, {}> & {
        options: GenericOptions;
    }>>;
}
declare const DataParserPipeExtended_base: DataParserExtendedBaseInit<typeof dataParsers.DataParserPipe>;
export declare class DataParserPipeExtended<GenericDefinition extends dataParsers.DataParserDefinitionPipe = dataParsers.DataParserDefinitionPipe> extends DataParserPipeExtended_base<GenericDefinition, Output<dataParsers.DataParserPipe<GenericDefinition>>, Input<dataParsers.DataParserPipe<GenericDefinition>>> {
    get classConstructor(): typeof DataParserPipeExtended & import("..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: DCommon.FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserPipeExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine: (theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>) => DataParserPipeExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
    /**
     * Creates an extended pipe parser from two parsers.
     * 
     * **Supported call styles:**
     * - Method: `DPE.pipe(input, output, definition?)` -> returns a pipe parser
     * 
     * Runs the input parser, then feeds its output to the output parser.
     * 
     * ```ts
     * const parser = DPE.pipe(DPE.string(), DPE.coerce.number());
     * const result = parser.parse("42");
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: number
     * }
     * 
     * const toLength = DPE.pipe(DPE.string(), DPE.transform(DPE.string(), (value) => value.length));
     * const lengthResult = toLength.parse("Duplo");
     * 
     * const passThrough = DPE.pipe(DPE.number(), DPE.number());
     * const passResult = passThrough.parse(10);
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/pipe
     * 
     * @namespace DPE
     * 
     */
    static create<GenericInput extends DataParser, GenericOutput extends DataParser, const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionPipe<Output<GenericOutput>>, "input" | "output"> = never>(input: GenericInput, output: GenericOutput, definition?: DCommon.FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionPipe<Output<GenericOutput>>, "input" | "output">, GenericDefinition>): DataParserPipeExtended<MergeDefinition<dataParsers.DataParserDefinitionPipe, DCommon.NeverCoalescing<GenericDefinition, {}> & {
        input: GenericInput;
        output: GenericOutput;
    }>>;
}
declare const DataParserNullableExtended_base: DataParserExtendedBaseInit<typeof dataParsers.DataParserNullable>;
export declare class DataParserNullableExtended<GenericDefinition extends dataParsers.DataParserDefinitionNullable = dataParsers.DataParserDefinitionNullable> extends DataParserNullableExtended_base<GenericDefinition, Output<dataParsers.DataParserNullable<GenericDefinition>>, Input<dataParsers.DataParserNullable<GenericDefinition>>> {
    get classConstructor(): typeof DataParserNullableExtended & import("..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: DCommon.FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserNullableExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine: (theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>) => DataParserNullableExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
    default<GenericInput extends Output<GenericDefinition["inner"]>>(input: GenericInput): DataParserNullableExtended<DCommon.SimplifyTopLevel<Omit<GenericDefinition, "coalescingValue"> & {
        readonly coalescingValue: GenericInput;
    }>>;
    /**
     * Creates an extended nullable parser from another parser.
     * 
     * **Supported call styles:**
     * - Method: `DPE.nullable(inner, definition?)` -> returns a nullable parser
     * 
     * Returns null (or a coalescing value) when input is null, otherwise parses with the inner parser.
     * 
     * ```ts
     * const parser = DPE.nullable(DPE.string());
     * const result = parser.parse(null);
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: string | null
     * }
     * 
     * const withCoalescing = DPE.number().nullable().default(0);
     * const coalesced = withCoalescing.parse(null);
     * // E.Error<DPE.DataParserError> | E.Success<number>
     * 
     * const nullableBool = DPE.nullable(DPE.boolean());
     * const boolResult = nullableBool.parse(true);
     * // E.Error<DPE.DataParserError> | E.Success<boolean | null>
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/nullable
     * 
     * @namespace DPE
     * 
     */
    static create<GenericDataParser extends DataParser, const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionNullable<Output<GenericDataParser>>, "inner"> = never>(inner: GenericDataParser, definition?: DCommon.FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionNullable<Output<GenericDataParser>>, "inner">, GenericDefinition>): DataParserNullableExtended<MergeDefinition<dataParsers.DataParserDefinitionNullable, DCommon.NeverCoalescing<GenericDefinition, {}> & {
        inner: GenericDataParser;
    }>>;
}
declare const DataParserOptionalExtended_base: DataParserExtendedBaseInit<typeof dataParsers.DataParserOptional>;
export declare class DataParserOptionalExtended<GenericDefinition extends dataParsers.DataParserDefinitionOptional = dataParsers.DataParserDefinitionOptional> extends DataParserOptionalExtended_base<GenericDefinition, Output<dataParsers.DataParserOptional<GenericDefinition>>, Input<dataParsers.DataParserOptional<GenericDefinition>>> {
    get classConstructor(): typeof DataParserOptionalExtended & import("..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: DCommon.FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserOptionalExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine: (theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>) => DataParserOptionalExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
    default<GenericInput extends Output<GenericDefinition["inner"]>>(input: GenericInput): DataParserOptionalExtended<DCommon.SimplifyTopLevel<Omit<GenericDefinition, "coalescingValue"> & {
        readonly coalescingValue: GenericInput;
    }>>;
    /**
     * Creates an extended optional parser from another parser.
     * 
     * **Supported call styles:**
     * - Method: `DPE.optional(inner, definition?)` -> returns an optional parser
     * 
     * Returns undefined (or a coalescing value) when input is undefined, otherwise parses with the inner parser.
     * 
     * ```ts
     * const parser = DPE.optional(DPE.string());
     * const result = parser.parse(undefined);
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: string | undefined
     * }
     * 
     * const withCoalescing = DPE.number().optional().default(0);
     * const coalesced = withCoalescing.parse(undefined);
     * // E.Error<DPE.DataParserError> | E.Success<number>
     * 
     * const optionalBool = DPE.optional(DPE.boolean());
     * const boolResult = optionalBool.parse(true);
     * // E.Error<DPE.DataParserError> | E.Success<boolean | undefined>
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/optional
     * 
     * @namespace DPE
     * 
     */
    static create<GenericDataParser extends DataParser, const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionOptional<Output<GenericDataParser>>, "inner"> = never>(inner: GenericDataParser, definition?: DCommon.FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionOptional<Output<GenericDataParser>>, "inner">, GenericDefinition>): DataParserOptionalExtended<MergeDefinition<dataParsers.DataParserDefinitionOptional, DCommon.NeverCoalescing<GenericDefinition, {}> & {
        inner: GenericDataParser;
    }>>;
}
declare const DataParserRecoverExtended_base: DataParserExtendedBaseInit<typeof dataParsers.DataParserRecover>;
export declare class DataParserRecoverExtended<GenericDefinition extends dataParsers.DataParserDefinitionRecover = dataParsers.DataParserDefinitionRecover> extends DataParserRecoverExtended_base<GenericDefinition, Output<dataParsers.DataParserRecover<GenericDefinition>>, Input<dataParsers.DataParserRecover<GenericDefinition>>> {
    get classConstructor(): typeof DataParserRecoverExtended & import("..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: DCommon.FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserRecoverExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine: (theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>) => DataParserRecoverExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
    /**
     * Creates an extended data parser that recovers with a fallback value on error.
     * 
     * **Supported call styles:**
     * - Method: `DPE.recover(inner, recoveredValue, definition?)` -> returns a recover parser
     * 
     * Runs the inner parser and returns the recovered value when parsing fails.
     * 
     * ```ts
     * const parser = DPE.recover(DPE.number(), 0);
     * const result = parser.parse("not-a-number");
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: number
     * }
     * 
     * const withString = DPE.recover(DPE.string(), "fallback");
     * const stringResult = withString.parse(123);
     * 
     * const okResult = parser.parse(10);
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/recover
     * 
     * @namespace DPE
     * 
     */
    static create<GenericDataParser extends DataParser, GenericRecoveredValue extends Output<GenericDataParser>, const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionRecover<Output<GenericDataParser>>, "inner" | "recoveredValue"> = never>(inner: GenericDataParser, recoveredValue: GenericRecoveredValue, definition?: DCommon.FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionRecover<Output<GenericDataParser>>, "inner" | "recoveredValue">, GenericDefinition>): DataParserRecoverExtended<MergeDefinition<dataParsers.DataParserDefinitionRecover, DCommon.NeverCoalescing<GenericDefinition, {}> & {
        inner: GenericDataParser;
        recoveredValue: GenericRecoveredValue;
    }>>;
}
declare const DataParserErrorHandlerExtended_base: DataParserExtendedBaseInit<typeof dataParsers.DataParserErrorHandler>;
export declare class DataParserErrorHandlerExtended<GenericDefinition extends dataParsers.DataParserDefinitionErrorHandler = dataParsers.DataParserDefinitionErrorHandler> extends DataParserErrorHandlerExtended_base<GenericDefinition, Output<dataParsers.DataParserErrorHandler<GenericDefinition>>, Input<dataParsers.DataParserErrorHandler<GenericDefinition>>> {
    get classConstructor(): typeof DataParserErrorHandlerExtended & import("..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: DCommon.FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserErrorHandlerExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine: (theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>) => DataParserErrorHandlerExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
    /**
     * Creates an extended data parser that reassigns issue messages after a schema has run.
     * 
     * **Supported call styles:**
     * - Method: `DPE.errorHandler(inner, transformers, definition?)` -> returns an error handler parser
     * 
     * Runs the inner parser, inspects every produced issue source, and replaces matching messages with the provided transformers.
     * 
     * ```ts
     * const parser = DPE.errorHandler(
     * 	DPE.number({ errorMessage: "invalid number" }),
     * 	DP.createErrorMessageTransformer(
     * 		DP.numberKind,
     * 		() => "Expected a valid age.",
     * 	),
     * );
     * const result = parser.parse("twenty");
     * if (E.isLeft(result)) {
     * 	const error = unwrap(result);
     * 	// error.issues[0]?.message === "Expected a valid age."
     * }
     * 
     * const withObject = DPE.errorHandler(
     * 	DPE.object({
     * 		name: DPE.string(),
     * 	}),
     * 	DP.createErrorMessageTransformer(DP.stringKind, () => "Expected text."),
     * );
     * const objectResult = withObject.parse({ name: 42 });
     * 
     * ```
     * 
     * @remarks
     * Checkers added directly to the returned error handler run after message rewriting. Issues produced by those checkers keep their own `errorMessage` or the handler `definition.errorMessage`.
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/errorHandler
     * 
     * @namespace DPE
     * 
     */
    static create<GenericDataParser extends DataParser, const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionErrorHandler<Output<GenericDataParser>>, "inner" | "errorMessageTransformers"> = never>(inner: GenericDataParser, errorMessageTransformers: dataParsers.ErrorMessageTransformer | dataParsers.ErrorMessageTransformer[], definition?: DCommon.FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionErrorHandler<Output<GenericDataParser>>, "inner" | "errorMessageTransformers">, GenericDefinition>): DataParserErrorHandlerExtended<MergeDefinition<dataParsers.DataParserDefinitionErrorHandler, DCommon.NeverCoalescing<GenericDefinition, {}> & {
        inner: GenericDataParser;
    }>>;
}
export interface DataParserExtended<GenericOutput extends unknown = unknown, GenericInput extends unknown = GenericOutput> extends DataParserBaseExtended<DataParserDefinition, GenericOutput, GenericInput> {
    addChecker(...args: DataParserCheckerBase<DataParserCheckerDefinition, GenericOutput>[]): DataParserExtended<GenericOutput, GenericInput>;
    refine(theFunction: (input: GenericOutput) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserExtended<GenericOutput, GenericInput>;
}
export type ContractExtended<GenericDataParser extends DataParserBaseExtended> = (DCommon.GetKind<GenericDataParser> & Omit<DCommon.RemoveKind<DataParserBaseExtended>, "addChecker" | "clone" | "definition"> & Pick<GenericDataParser, "definition"> & {
    addChecker(...args: never): DataParserBaseExtended;
    clone(): ContractExtended<GenericDataParser>;
});
export {};
