import { type KindHandler, type FixDeepFunctionInfer, type NeverCoalescing, type Kind } from "../../common";
import { type DataParser, type DataParserDefinition } from "../base";
import { type DataParserError } from "../../dataParser/error";
import { type DataParserChecker } from "../baseChecker";
import { type ApplyRefinementOfDefinition, type Input, type AddCheckersToDefinition, type GetEligibleChecker, type MergeDefinition, type Output, type PrepareDataParserDefinition, type DataParsers, type DataParserCheckers } from "../types";
export type ErrorMessageTransformer = (source: DataParsers | DataParserCheckers) => string | null;
export declare function createErrorMessageTransformer<GenericKindHandler extends KindHandler>(kindHandler: GenericKindHandler, theFunction: (source: Extract<DataParsers | DataParserCheckers, Kind<GenericKindHandler["definition"]>>) => string | null): ErrorMessageTransformer;
export type DataParserErrorHandlerCheckers<GenericInput extends unknown> = GetEligibleChecker<GenericInput>;
export interface DataParserDefinitionErrorHandler<GenericInput extends unknown = unknown> extends DataParserDefinition<DataParserErrorHandlerCheckers<GenericInput>> {
    inner: DataParser;
    errorMessageTransformers: ErrorMessageTransformer[];
}
export declare const errorHandlerKind: KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/error-handler", unknown>>;
declare const DataParserErrorHandler_base: import("..").DataParserBaseInit<KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/error-handler", unknown>>>;
export declare class DataParserErrorHandler<GenericDefinition extends DataParserDefinitionErrorHandler = DataParserDefinitionErrorHandler> extends DataParserErrorHandler_base<GenericDefinition, ApplyRefinementOfDefinition<Output<GenericDefinition["inner"]>, GenericDefinition>, ApplyRefinementOfDefinition<Input<GenericDefinition["inner"]>, GenericDefinition>> {
    get classConstructor(): typeof DataParserErrorHandler & import("..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserErrorHandler<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    static execParse(self: DataParserErrorHandler, data: unknown, error: DataParserError): unknown;
    static dataParserIsAsynchronous(self: DataParserErrorHandler): boolean;
    static prepareDefinition(inner: DataParser, errorMessageTransformers: ErrorMessageTransformer[], definition?: Partial<Omit<DataParserDefinitionErrorHandler, "inner" | "errorMessageTransformers">>): DataParserDefinitionErrorHandler;
    /**
     * Creates a data parser that reassigns issue messages after a schema has run.
     * 
     * **Supported call styles:**
     * - Classic: `DP.errorHandler(inner, transformers, definition?)` -> returns an error handler parser
     * - Curried: not available
     * 
     * Runs the inner parser, inspects every produced issue source, and replaces matching messages with the provided transformers.
     * 
     * ```ts
     * const parser = DP.errorHandler(
     * 	DP.number({ errorMessage: "invalid number" }),
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
     * const untouched = DP.errorHandler(
     * 	DP.number({ errorMessage: "invalid number" }),
     * 	DP.createErrorMessageTransformer(
     * 		DP.stringKind,
     * 		() => "Expected a string.",
     * 	),
     * );
     * const untouchedResult = untouched.parse("twenty");
     * 
     * const withMultipleRules = DP.errorHandler(
     * 	DP.string(),
     * 	[
     * 		DP.createErrorMessageTransformer(DP.stringKind, () => "Expected text."),
     * ```
     * 
     * @remarks
     * Checkers added directly to the returned error handler run after message rewriting. Issues produced by those checkers keep their own `errorMessage` or the handler `definition.errorMessage`.
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/errorHandler
     * 
     * @namespace DP
     * 
     */
    static create<GenericDataParser extends DataParser, const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionErrorHandler<Output<GenericDataParser>>, "inner" | "errorMessageTransformers"> = never>(inner: GenericDataParser, errorMessageTransformers: ErrorMessageTransformer | ErrorMessageTransformer[], definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<DataParserDefinitionErrorHandler<Output<GenericDataParser>>, "inner" | "errorMessageTransformers">, GenericDefinition>): DataParserErrorHandler<MergeDefinition<DataParserDefinitionErrorHandler, NeverCoalescing<GenericDefinition, {}> & {
        inner: GenericDataParser;
    }>>;
}
/**
 * Creates a data parser that reassigns issue messages after a schema has run.
 * 
 * **Supported call styles:**
 * - Classic: `DP.errorHandler(inner, transformers, definition?)` -> returns an error handler parser
 * - Curried: not available
 * 
 * Runs the inner parser, inspects every produced issue source, and replaces matching messages with the provided transformers.
 * 
 * ```ts
 * const parser = DP.errorHandler(
 * 	DP.number({ errorMessage: "invalid number" }),
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
 * const untouched = DP.errorHandler(
 * 	DP.number({ errorMessage: "invalid number" }),
 * 	DP.createErrorMessageTransformer(
 * 		DP.stringKind,
 * 		() => "Expected a string.",
 * 	),
 * );
 * const untouchedResult = untouched.parse("twenty");
 * 
 * const withMultipleRules = DP.errorHandler(
 * 	DP.string(),
 * 	[
 * 		DP.createErrorMessageTransformer(DP.stringKind, () => "Expected text."),
 * ```
 * 
 * @remarks
 * Checkers added directly to the returned error handler run after message rewriting. Issues produced by those checkers keep their own `errorMessage` or the handler `definition.errorMessage`.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/errorHandler
 * 
 * @namespace DP
 * 
 */
export declare const errorHandler: typeof DataParserErrorHandler.create;
export {};
