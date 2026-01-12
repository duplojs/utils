import { type TheDate } from "./types";
/**
 * Checks whether a value is a TheDate.
 * 
 * Signature: `is(input)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.now() as string;
 * 
 * if (D.is(input)) {
 * 	// input is TheDate
 * }
 * 
 * pipe(
 * 	input,
 * 	when(
 * 		D.is,
 * 		(value) => {
 * 			// value is TheDate
 * 		},
 * 	),
 * );
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/is
 * 
 * @namespace D
 * 
 */
export declare function is(input: string): input is TheDate;
