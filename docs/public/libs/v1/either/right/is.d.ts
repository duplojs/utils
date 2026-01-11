import { type EitherRight } from "./create";
/**
 * Type guard that checks whether a value is an EitherRight. Allows accessing the payload without explicit conversion.
 * 
 * Signature: `isRight(input)` → returns a value
 * 
 * Acts as a type guard and narrows the input type when true.
 * 
 * ```ts
 * const result = true
 * 	? E.ok()
 * 	: E.fail();
 * 
 * if (E.isRight(result)) {
 * 	// type: E.EitherOk
 * }
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/isRight
 * 
 * @namespace E
 * 
 */
export declare function isRight<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, EitherRight>;
