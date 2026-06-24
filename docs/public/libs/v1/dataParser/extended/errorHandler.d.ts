import { DataParserErrorHandlerExtended } from "./base";
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
export declare const errorHandler: typeof DataParserErrorHandlerExtended.create;
