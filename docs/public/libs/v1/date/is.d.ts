import { TheDate } from "./theDate";
/**
 * Checks whether a value is an instance of `TheDate`.
 * 
 * Signature: `is(input)` → `input is TheDate`
 * 
 * ```ts
 * const input = D.now() as AnyValue;
 * 
 * if (D.is(input)) {
 * 	// input: TheDate
 * }
 * 
 * pipe(
 * 	input,
 * 	when(D.is, (value) => {
 * 		// value: TheDate
 * 	}),
 * );
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/is
 * 
 * @namespace D
 * 
 */
export declare function is(input: unknown): input is TheDate;
