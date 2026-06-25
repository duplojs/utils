import * as DCommon from "../common";
import * as DEither from "../either";
import { type DataParserError, SymbolDataParserError } from "./error";
import { type DataParserChecker } from "./baseChecker";
import type { Output, DataParserBaseInit } from "./types";
export interface DataParserDefinition<GenericChecker extends DataParserChecker = DataParserChecker> {
    readonly errorMessage?: string;
    readonly checkers: readonly GenericChecker[];
}
export declare const dataParserKind: DCommon.KindHandler<DCommon.KindDefinition<"@DuplojsUtilsDataParser/base", {
    input: unknown;
    output: unknown;
}>>;
declare const ParseError_base: DCommon.KindClass<DCommon.KindHandler<DCommon.KindDefinition<"parse-error", unknown>>, ErrorConstructor>;
export declare class ParseError extends ParseError_base {
    error: DataParserError;
    constructor(error: DataParserError);
}
declare const DataParserBase_base: new <GenericParentInstance extends never = never, GenericKindValue extends {
    input: unknown;
    output: unknown;
} = {
    input: unknown;
    output: unknown;
}>(kindValue: GenericKindValue) => DCommon.NeverCoalescing<GenericParentInstance, {}> & DCommon.Kind<DCommon.KindDefinition<"@DuplojsUtilsDataParser/base", {
    input: unknown;
    output: unknown;
}>, GenericKindValue>;
export declare abstract class DataParserBase<GenericDefinition extends DataParserDefinition = DataParserDefinition, GenericOutput extends unknown = unknown, GenericInput extends unknown = GenericOutput> extends DataParserBase_base<never, {
    output: GenericOutput;
    input: GenericInput;
}> {
    readonly definition: GenericDefinition;
    constructor(definition: GenericDefinition);
    abstract get classConstructor(): (DCommon.AnyConstructor<[any], DataParserBase<any>> & {
        create(...args: never[]): DataParserBase<any>;
        execParse(self: DataParserBase<any>, data: unknown, error: DataParserError): unknown;
        dataParserIsAsynchronous(self: DataParserBase<any>): boolean;
        prepareDefinition(...args: never[]): DataParserDefinition;
    });
    private execParse;
    exec(data: unknown, error: DataParserError): DCommon.MaybePromise<GenericOutput | SymbolDataParserError>;
    /**
     * The parse() method runs a data parser synchronously and returns an Either with the parsed value or a DataParserError.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.parse(input)` -> returns an `Either`
     * 
     * It executes the parser, applies all registered checkers, and never mutates the input.
     * 
     * ```ts
     * const stringSchema = DP.string();
     * 
     * const result = stringSchema.parse("DuploJS");
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: string
     * }
     * 
     * const resultWithError = DP.string({
     * 	checkers: [DP.checkerStringMin(3)],
     * }).parse("ok");
     * 
     * if (E.isLeft(resultWithError)) {
     * 	const error = unwrap(resultWithError);
     * 	// error: DP.DataParserError
     * }
     * 
     * const numberSchema = DP.coerce.number();
     * const numberResult = numberSchema.parse("42");
     * if (E.isRight(numberResult)) {
     * 	const value = unwrap(numberResult);
     * 	// value: number
     * }
     * ```
     * 
     * @namespace DP
     * 
     */
    parse(data: unknown): (DEither.Success<GenericOutput> | DEither.Error<DataParserError>);
    /**
     * The asyncParse() method runs a data parser asynchronously and resolves to an Either with the parsed value or a DataParserError.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.asyncParse(input)` -> returns a promise
     * 
     * It awaits the parser and all registered checkers, whether their execution is synchronous or asynchronous.
     * 
     * @namespace DP
     * 
     */
    asyncParse(data: unknown): Promise<DEither.Success<GenericOutput> | DEither.Error<DataParserError>>;
    /**
     * The parseOrThrow() method runs a data parser synchronously and returns the parsed value or throws a DataParserThrowError.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.parseOrThrow(input)` -> returns the parsed value
     * 
     * It executes the parser, applies all registered checkers, and never mutates the input.
     * 
     * ```ts
     * const stringSchema = DP.string({
     * 	checkers: [DP.checkerStringMin(3)],
     * });
     * 
     * const value = stringSchema.parseOrThrow("DuploJS");
     * // value: string
     * 
     * try {
     * 	stringSchema.parseOrThrow("ok");
     * } catch (error) {
     * 	if (error instanceof DP.ParseError) {
     * 		// parseError: DP.ParseError
     * 	}
     * }
     * 
     * ```
     * 
     * @namespace DP
     * 
     */
    parseOrThrow(data: unknown): GenericOutput;
    /**
     * The asyncParseOrThrow() method runs a data parser asynchronously and resolves to the parsed value or rejects with a DataParserThrowError.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.asyncParseOrThrow(input)` -> returns a promise
     * 
     * It awaits the parser and all registered checkers, whether their execution is synchronous or asynchronous.
     * 
     * @namespace DP
     * 
     */
    asyncParseOrThrow(data: unknown): Promise<GenericOutput>;
    /**
     * The addChecker() method returns a new data parser with one or more additional checkers appended.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.addChecker(checker1, checker2)` -> returns a new parser
     * 
     * Checkers are executed after the parser core logic, and the original parser is not mutated.
     * 
     * Checker compatibility is output-based: a checker typed for `T` can be added to a parser whose output type is `T`.
     * 
     * ```ts
     * const withMin = DP.string()
     * 	.addChecker(DP.checkerStringMin(3));
     * 
     * const withRange = DP.string()
     * 	.addChecker(
     * 		DP.checkerStringMin(3),
     * 		DP.checkerStringMax(10),
     * 	);
     * 
     * const withRefine = DP.string()
     * 	.addChecker(DP.checkerRefine((value) => value.startsWith("id:")));
     * ```
     * 
     * @namespace DP
     * 
     */
    addChecker(...checkers: never): DataParserBase;
    /**
     * The clone() method creates a new data parser instance with the same definition and checkers.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.clone()` -> returns a new parser
     * 
     * The original parser is not mutated, and the clone can be extended independently.
     * 
     * ```ts
     * const base = DP.string();
     * const cloned = base.clone();
     * 
     * const withMin = DP.string()
     * 	.addChecker(DP.checkerStringMin(3));
     * 
     * const withMinClone = withMin.clone();
     * 
     * const coerceNumber = DP.coerce.number();
     * const coerceNumberClone = coerceNumber.clone();
     * ```
     * 
     * @namespace DP
     * 
     */
    clone(): this;
    private cachedIsAsynchronous;
    /**
     * The isAsynchronous() method tells whether a data parser requires async execution.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.isAsynchronous()` -> returns a boolean
     * 
     * It checks the parser definition (and nested parsers when relevant) and does not run any parsing.
     * 
     * ```ts
     * const syncParser = DDataParser.string();
     * syncParser.isAsynchronous(); // false
     * 
     * const asyncTransform = DDataParser.transform(
     * 	DDataParser.number(),
     * 	async(value) => {
     * 		const result = await Promise.resolve(value);
     * 
     * 		return result;
     * 	},
     * );
     * asyncTransform.isAsynchronous(); // true
     * 
     * const asyncArray = DDataParser.array(asyncTransform);
     * asyncArray.isAsynchronous(); // true
     * 
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/isAsynchronous
     * 
     * @namespace DP
     * 
     */
    isAsynchronous(): boolean;
    /**
     * The contract() method validates that the parser output type exactly matches the type you want to assign it to.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.contract<Output>()` -> returns the same parser if types match
     * 
     * It does not change runtime behavior; it enforces at compile time that the parser output type and the expected type are exactly the same.
     * 
     * ```ts
     * interface User {
     * 	id: number;
     * 	name: string;
     * }
     * 
     * const userParser: DP.DataParser<User> = DP.object({
     * 	id: DP.number(),
     * 	name: DP.string(),
     * }).contract();
     * 
     * const statusParser: DP.DataParser<"draft" | "published">
     * 	= DP.literal(["draft", "published"]).contract();
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser
     * 
     * @namespace DP
     * 
     */
    contract<GenericValue extends unknown>(...args: DCommon.IsEqual<Output<this>, GenericValue> extends true ? [] : [] & DCommon.ComputedTypeError<"Contract error.">): DataParser<GenericValue>;
    /**
     * The setErrorMessage() method sets the parser error message on the current data parser.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.setErrorMessage(errorMessage)` -> returns the same parser
     * 
     * This method mutates the parser definition and affects errors emitted after it is called. Prefer `addErrorMessage()` when you need an immutable update.
     * 
     * ```ts
     * const parser = DP.string();
     * 
     * parser.setErrorMessage("string.invalid");
     * 
     * const result = parser.parse(123);
     * 
     * const sameParser = parser.setErrorMessage("string.expected");
     * 
     * const checkerMessage = DP.string()
     * 	.addChecker(DP.checkerStringMin(3))
     * 	.setErrorMessage("string.too-short");
     * 
     * ```
     * 
     * @deprecated This method mutates the data parser.
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser
     * 
     * @namespace DP
     * 
     */
    setErrorMessage(errorMessage: string): this;
    /**
     * The addErrorMessage() method returns a new data parser with a custom parser error message.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.addErrorMessage(errorMessage)` -> returns a new parser
     * 
     * The original parser is not mutated. The returned parser uses the message for parser errors and as the fallback message for checkers that do not define their own message.
     * 
     * ```ts
     * const parser = DP.string();
     * 
     * const withMessage = parser.addErrorMessage("string.invalid");
     * 
     * const result = withMessage.parse(123);
     * 
     * const originalResult = parser.parse(123);
     * 
     * const checkerMessage = DP.string()
     * 	.addChecker(DP.checkerStringMin(3))
     * 	.addErrorMessage("string.too-short");
     * 
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser
     * 
     * @namespace DP
     * 
     */
    addErrorMessage(errorMessage: string): this;
    static create: (...args: never[]) => unknown;
    static execParse: (self: any, data: unknown, error: DataParserError) => unknown;
    static dataParserIsAsynchronous: (self: any) => boolean;
    static prepareDefinition: (...args: never[]) => DataParserDefinition;
    static init<GenericKindHandler extends DCommon.KindHandler>(kindHandler: GenericKindHandler): DataParserBaseInit<GenericKindHandler>;
}
export interface DataParser<GenericOutput extends unknown = unknown, GenericInput extends unknown = GenericOutput> extends DataParserBase<DataParserDefinition, GenericOutput, GenericInput> {
    addChecker(...args: DataParserChecker<GenericOutput>[]): DataParser<GenericOutput, GenericInput>;
}
export type Contract<GenericDataParser extends DataParserBase> = (DCommon.GetKind<GenericDataParser> & Omit<DCommon.RemoveKind<DataParserBase>, "addChecker" | "clone" | "definition"> & Pick<GenericDataParser, "definition"> & {
    addChecker(...args: never): Contract<GenericDataParser>;
    clone(): Contract<GenericDataParser>;
});
export {};
