import { type Kind, type NeverCoalescing, type AnyFunction, type SimplifyTopLevel, type AnyValue } from "../common";
import { type MergeDefinition } from "./types";
import { type Output, type DataParser, type DataParserDefinition } from "./base";
import type * as DEither from "../either";
import * as dataParsers from "./parsers";
import * as dataParsersExtended from "./extended";
import { type DataParserError } from "./error";
export declare const extendedKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsDataParser/extended", unknown>>;
type _DataParserExtended<GenericDefinition extends DataParserDefinition, GenericOutput extends unknown, GenericInput extends unknown> = (DataParser<GenericDefinition, GenericOutput, GenericInput> & Kind<typeof extendedKind.definition>);
export interface DataParserExtended<GenericDefinition extends DataParserDefinition = DataParserDefinition, GenericOutput extends unknown = unknown, GenericInput extends unknown = GenericOutput> extends _DataParserExtended<GenericDefinition, GenericOutput, GenericInput> {
    /**
     * The parse() method runs an extended data parser synchronously and returns an Either with the parsed value or a DataParserError.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.parse(input)` -> returns an `Either`
     * 
     * It executes the parser, applies all registered checkers, and keeps the extended API available on the parser instance.
     * 
     * ```ts
     * const stringSchema = DPE.string().min(3);
     * 
     * const result = stringSchema.parse("DuploJS");
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: string
     * }
     * 
     * const resultWithError = DPE.string()
     * 	.min(3)
     * 	.parse("ok");
     * 
     * if (E.isLeft(resultWithError)) {
     * 	const error = unwrap(resultWithError);
     * 	// error: DataParserError
     * }
     * 
     * const numberSchema = DPE.coerce.number();
     * const numberResult = numberSchema.parse("42");
     * if (E.isRight(numberResult)) {
     * 	const value = unwrap(numberResult);
     * 	// value: number
     * }
     * ```
     * 
     * @namespace DPE
     * 
     */
    parse(data: unknown): DEither.Success<GenericOutput> | DEither.Error<DataParserError>;
    /**
     * The asyncParse() method runs an extended data parser asynchronously and resolves to an Either with the parsed value or a DataParserError.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.asyncParse(input)` -> returns a promise
     * 
     * It executes the async parser path, applies all registered checkers, and keeps the extended API available on the parser instance.
     * 
     * @namespace DPE
     * 
     */
    asyncParse(data: unknown): Promise<DEither.Success<GenericOutput> | DEither.Error<DataParserError>>;
    /**
     * The parseOrThrow() method runs an extended data parser synchronously and returns the parsed value or throws a DataParserThrowError.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.parseOrThrow(input)` -> returns the parsed value
     * 
     * It executes the parser, applies all registered checkers, and keeps the extended API available on the parser instance.
     * 
     * ```ts
     * const stringSchema = DPE.string().min(3);
     * 
     * const value = stringSchema.parseOrThrow("DuploJS");
     * // value: string
     * 
     * try {
     * 	stringSchema.parseOrThrow("ok");
     * } catch (error) {
     * 	if (error instanceof DP.DataParserThrowError) {
     * 		// DP.DataParserError
     * 	}
     * }
     * ```
     * 
     * @namespace DPE
     * 
     */
    parseOrThrow(data: unknown): GenericOutput;
    /**
     * The asyncParseOrThrow() method runs an extended data parser asynchronously and resolves to the parsed value or rejects with a DataParserThrowError.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.asyncParseOrThrow(input)` -> returns a promise
     * 
     * It executes the async parser path, applies all registered checkers, and keeps the extended API available on the parser instance.
     * 
     * @namespace DPE
     * 
     */
    asyncParseOrThrow(data: unknown): Promise<GenericOutput>;
    /**
     * The addChecker() method returns a new extended data parser with one or more additional checkers appended.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.addChecker(checker1, checker2)` -> returns a new parser
     * 
     * Checkers are executed after the parser core logic, the original parser is not mutated, and the extended methods remain available.
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
    addChecker(...args: never): DataParserExtended;
    /**
     * The clone() method creates a new extended data parser instance with the same definition and checkers.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.clone()` -> returns a new parser
     * 
     * The original parser is not mutated, and the clone can be extended independently using extended methods.
     * 
     * ```ts
     * const base = DPE.string();
     * const cloned = base.clone();
     * 
     * const withMin = DPE.string().min(3);
     * const withMinClone = withMin.clone();
     * 
     * const coerceNumber = DPE.coerce.number();
     * const coerceNumberClone = coerceNumber.clone();
     * ```
     * 
     * @namespace DPE
     * 
     */
    clone(): this;
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
    array<GenericThis extends this = this, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionArray, "element">> = never>(definition?: GenericDefinition): dataParsersExtended.DataParserArrayExtended<MergeDefinition<dataParsers.DataParserDefinitionArray, NeverCoalescing<GenericDefinition, {}> & {
        element: GenericThis;
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
    transform<GenericThis extends this = this, GenericOutput extends AnyValue = AnyValue, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionTransform, "inner" | "theFunction">> = never>(theFunction: (input: Output<GenericThis>, error: DataParserError) => GenericOutput, definition?: GenericDefinition): dataParsersExtended.DataParserTransformExtended<MergeDefinition<dataParsers.DataParserDefinitionTransform, NeverCoalescing<GenericDefinition, {}> & {
        inner: GenericThis;
        theFunction(input: Output<GenericThis>): GenericOutput;
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
    arrayCoalescing<GenericThis extends this = this>(): dataParsersExtended.DataParserUnionExtended<SimplifyTopLevel<Omit<dataParsers.DataParserDefinitionUnion, "options"> & {
        readonly options: [
            dataParsersExtended.DataParserArrayExtended<SimplifyTopLevel<Omit<dataParsers.DataParserDefinitionArray, "element"> & {
                readonly element: GenericThis;
            }>>,
            dataParsersExtended.DataParserTransformExtended<SimplifyTopLevel<Omit<dataParsers.DataParserDefinitionTransform, "inner" | "theFunction"> & {
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
    pipe<GenericThis extends this = this, GenericOutput extends DataParser = DataParser, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionPipe, "input" | "output">> = never>(output: GenericOutput, definition?: GenericDefinition): dataParsersExtended.DataParserPipeExtended<MergeDefinition<dataParsers.DataParserDefinitionPipe, NeverCoalescing<GenericDefinition, {}> & {
        input: GenericThis;
        output: GenericOutput;
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
    nullable<GenericThis extends this = this, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionNullable<Output<GenericThis> | null>, "inner">> = never>(definition?: GenericDefinition): dataParsersExtended.DataParserNullableExtended<MergeDefinition<dataParsers.DataParserDefinitionNullable, NeverCoalescing<GenericDefinition, {}> & {
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
    optional<GenericThis extends this = this, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionOptional<Output<GenericThis> | undefined>, "inner">> = never>(definition?: GenericDefinition): dataParsersExtended.DataParserOptionalExtended<MergeDefinition<dataParsers.DataParserDefinitionOptional, NeverCoalescing<GenericDefinition, {}> & {
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
    or<GenericThis extends this = this, GenericDataParser extends DataParser = DataParser, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionUnion, "options">> = never>(option: GenericDataParser, definition?: GenericDefinition): dataParsersExtended.DataParserUnionExtended<MergeDefinition<dataParsers.DataParserDefinitionUnion, NeverCoalescing<GenericDefinition, {}> & {
        options: [GenericThis, GenericDataParser];
    }>>;
    refine(...args: never): DataParserExtended;
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
    recover<GenericThis extends this = this, GenericRecoveredValue extends unknown = unknown, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionRecover, "inner" | "recoveredValue">> = never>(recoveredValue: GenericRecoveredValue, definition?: GenericDefinition): dataParsersExtended.DataParserRecoverExtended<MergeDefinition<dataParsers.DataParserDefinitionRecover, NeverCoalescing<GenericDefinition, {}> & {
        inner: GenericThis;
        recoveredValue: GenericRecoveredValue;
    }>>;
}
export declare function dataParserExtendedInit<GenericDataParser extends DataParser, GenericDataParserExtended extends GenericDataParser & DataParserExtended>(dataParser: NoInfer<GenericDataParser>, rest: NoInfer<{
    [Prop in Exclude<keyof GenericDataParserExtended, keyof (GenericDataParser & DataParserExtended)>]: GenericDataParserExtended[Prop] extends AnyFunction ? (self: GenericDataParserExtended, ...args: Parameters<GenericDataParserExtended[Prop]>) => ReturnType<GenericDataParserExtended[Prop]> : GenericDataParserExtended[Prop];
}>): GenericDataParserExtended;
export declare namespace dataParserExtendedInit {
    var overrideHandler: import("../common").OverrideHandler<DataParserExtended<DataParserDefinition<import("./base").DataParserChecker<import("./base").DataParserCheckerDefinition, unknown>>, unknown, unknown>>;
}
export type ContractExtended<GenericOutput extends unknown, GenericInput extends unknown = GenericOutput> = DataParserExtended<DataParserDefinition<never>, GenericOutput, GenericInput>;
export {};
