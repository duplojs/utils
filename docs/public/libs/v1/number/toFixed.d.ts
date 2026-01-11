/**
 * Formats a number using fixed-point notation.
 * 
 * **Supported call styles:**
 * - Classic: `toFixed(value, digits)` → returns a string
 * - Curried: `toFixed(digits)` → returns a function waiting for the value
 * 
 * ```ts
 * N.toFixed(
 * 	3.1415,
 * 	2,
 * ); // "3.14"
 * 
 * pipe(
 * 	3.1415,
 * 	N.toFixed(1),
 * ); // "3.1"
 * 
 * N.toFixed(
 * 	10,
 * 	0,
 * ); // "10"
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`Number.prototype.toFixed`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/number/toFixed
 * 
 * @namespace N
 * 
 */
export declare function toFixed<GenericValue extends number>(digits: number): (value: GenericValue) => string;
export declare function toFixed<GenericValue extends number>(value: GenericValue, digits: number): string;
