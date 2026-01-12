import { type GetKindHandler, type GetKindValue, type Kind, type KindHandler, type RemoveKind } from "../common";
import { SymbolDataParserErrorIssue, SymbolDataParserErrorPromiseIssue, type DataParserError } from "./error";
import * as DEither from "../either";
export declare const SymbolDataParserErrorLabel = "SymbolDataParserError";
export declare const SymbolDataParserError: unique symbol;
export type SymbolDataParserError = typeof SymbolDataParserError;
export declare const checkerKind: KindHandler<import("../common").KindDefinition<"@DuplojsUtilsDataParser/checker", unknown>>;
export interface DataParserCheckerDefinition {
    readonly errorMessage?: string;
}
export interface DataParserChecker<GenericDefinition extends DataParserCheckerDefinition = DataParserCheckerDefinition, GenericInput extends unknown = unknown> extends Kind<typeof checkerKind.definition, GenericInput> {
    readonly definition: GenericDefinition;
    exec(data: GenericInput, self: this): GenericInput | SymbolDataParserErrorIssue;
}
export type InputChecker<GenericDataParser extends DataParserChecker> = Parameters<GenericDataParser["exec"]>[0];
export declare function dataParserCheckerInit<GenericDataParserChecker extends DataParserChecker>(kind: Exclude<GetKindHandler<GenericDataParserChecker>, typeof checkerKind>, params: NoInfer<Omit<RemoveKind<GenericDataParserChecker>, "exec">>, exec: (...args: Parameters<GenericDataParserChecker["exec"]>) => GetKindValue<typeof checkerKind, GenericDataParserChecker> | SymbolDataParserErrorIssue): GenericDataParserChecker;
export declare const dataParserKind: KindHandler<import("../common").KindDefinition<"@DuplojsUtilsDataParser/base", {
    input: unknown;
    output: unknown;
}>>;
export interface DataParserDefinition<GenericChecker extends DataParserChecker = DataParserChecker> {
    readonly errorMessage?: string;
    readonly checkers: readonly GenericChecker[];
}
export interface DataParser<GenericDefinition extends DataParserDefinition = DataParserDefinition, GenericOutput extends unknown = unknown, GenericInput extends unknown = GenericOutput> extends Kind<typeof dataParserKind.definition, {
    input: GenericInput;
    output: GenericOutput;
}> {
    readonly definition: GenericDefinition;
    exec(data: unknown, error: DataParserError): GenericOutput | SymbolDataParserError;
    asyncExec(data: unknown, error: DataParserError): Promise<GenericOutput | SymbolDataParserError>;
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
    parse(data: unknown): DEither.EitherSuccess<GenericOutput> | DEither.EitherError<DataParserError>;
    /**
     * The asyncParse() method runs a data parser asynchronously and resolves to an Either with the parsed value or a DataParserError.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.asyncParse(input)` -> returns a promise
     * 
     * It executes the async parser path, applies all registered checkers, and never mutates the input.
     * 
     * ```ts
     * // TODO: add asyncParse examples.
     * ```
     * 
     * @remarks 
     * - TODO: complete this documentation and examples.
     * 
     * @namespace DP
     * 
     */
    asyncParse(data: unknown): Promise<DEither.EitherSuccess<GenericOutput> | DEither.EitherError<DataParserError>>;
    /**
     * The addChecker() method returns a new data parser with one or more additional checkers appended.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.addChecker(checker1, checker2)` -> returns a new parser
     * 
     * Checkers are executed after the parser core logic, and the original parser is not mutated.
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
    addChecker(...args: never): DataParser;
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
    /**
     * @deprecated Method with unreliable typing.
     */
    construct(definition: never): DataParser;
}
interface DataParserInitExecParams<GenericDataParser extends DataParser> {
    sync(...args: [...Parameters<GenericDataParser["exec"]>, self: GenericDataParser]): (GetKindValue<typeof dataParserKind, GenericDataParser>["output"] | SymbolDataParserErrorIssue | SymbolDataParserErrorPromiseIssue);
    async(...args: [...Parameters<GenericDataParser["exec"]>, self: GenericDataParser]): Promise<GetKindValue<typeof dataParserKind, GenericDataParser>["output"] | SymbolDataParserErrorIssue | SymbolDataParserErrorPromiseIssue>;
}
export declare function dataParserInit<GenericDataParser extends DataParser>(kind: Exclude<GetKindHandler<GenericDataParser>, typeof dataParserKind>, definition: GenericDataParser["definition"], exec: (DataParserInitExecParams<GenericDataParser> | DataParserInitExecParams<GenericDataParser>["sync"])): GenericDataParser;
export declare namespace dataParserInit {
    var overrideHandler: import("../common").OverrideHandler<DataParser<DataParserDefinition<DataParserChecker<DataParserCheckerDefinition, unknown>>, unknown, unknown>>;
}
export type Output<GenericDataParser extends DataParser> = GetKindValue<typeof dataParserKind, GenericDataParser>["output"];
export type Input<GenericDataParser extends DataParser> = GetKindValue<typeof dataParserKind, GenericDataParser>["input"];
export type Contract<GenericOutput extends unknown, GenericInput extends unknown = GenericOutput> = DataParser<DataParserDefinition<never>, GenericOutput, GenericInput>;
export {};
