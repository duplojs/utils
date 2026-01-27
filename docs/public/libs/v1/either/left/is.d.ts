import { type Left } from "./create";
/**
 * Type guard that checks whether a value is an Left. Ideal to secure an unwrap or trigger an error branch.
 * 
 * Signature: `isLeft(input)` → returns a value
 * 
 * Acts as a type guard and narrows the input type when true.
 * 
 * ```ts
 * const result = false
 * 	? E.ok()
 * 	: E.fail();
 * 
 * if (E.isLeft(result)) {
 * 	// type: E.Fail
 * }
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/isLeft
 * 
 * @namespace E
 * 
 */
export declare function isLeft<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, Left>;
