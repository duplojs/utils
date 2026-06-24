import { DataParserPipeExtended } from "./base";
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
export declare const pipe: typeof DataParserPipeExtended.create;
