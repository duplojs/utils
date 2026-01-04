/**
 * Clamps a number between a lower and upper bound.
 * 
 * **Supported call styles:**
 * - Classic: `clamp(value, lowerBound, upperBound)` → returns a number
 * - Curried: `clamp(lowerBound, upperBound)` → returns a function waiting for the value
 * 
 * @example
 * ```ts
 * N.clamp(
 * 	5,
 * 	0,
 * 	10,
 * ); // 5
 * 
 * pipe(
 * 	20,
 * 	N.clamp(0, 10),
 * ); // 10
 * 
 * N.clamp(
 * 	-5,
 * 	0,
 * 	10,
 * ); // 0
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/number/clamp
 * 
 * @namespace N
 * 
 */
export declare function clamp<GenericValue extends number>(lowerBound: number, upperBound: number): (value: GenericValue) => number;
export declare function clamp<GenericValue extends number>(value: GenericValue, lowerBound: number, upperBound: number): number;
