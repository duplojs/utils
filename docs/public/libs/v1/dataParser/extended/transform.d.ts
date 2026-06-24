import { DataParserTransformExtended } from "./base";
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
export declare const transform: typeof DataParserTransformExtended.create;
