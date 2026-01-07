import { type ArrayReduceFunctionParams, type ArrayReduceFromResult, type ArrayReduceFromValue, type ArrayReduceExit, type ArrayReduceNext } from "./reduce";
import { type IsEqual } from "../common";
/**
 * Reduces an array from right to left.
 * 
 * **Supported call styles:**
 * - Classic: `reduceRight(array, startValue, theFunction)` → returns the reduced value
 * - Curried: `reduceRight(startValue, theFunction)` → returns a function waiting for the array
 * 
 * The function receives `{ element, index, lastValue, next, exit, nextWithObject, nextPush, self }`.
 * The input array is not mutated.
 * 
 * 
 * ```ts
 * A.reduceRight(
 * 	[1, 2, 3],
 * 	"",
 * 	({ element, lastValue, next }) => next(`${lastValue}${element}`),
 * ); // "321"
 * 
 * pipe(
 * 	["a", "b", "c"],
 * 	A.reduceRight("", ({ element, lastValue, next }) => next(`${lastValue}${element}`)),
 * ); // "cba"
 * 
 * A.reduceRight(
 * 	[1, 2, 3],
 * 	0,
 * 	({ element, lastValue, next }) => next(lastValue + element),
 * ); // 6
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as `reduce`, but iterates from the end
 * 
 * @see [`A.reduce`](https://utils.duplojs.dev/en/v1/api/array/reduce) For left-to-right reduction
 * @see https://utils.duplojs.dev/en/v1/api/array/reduceRight
 * 
 * @namespace A
 * 
 */
export declare function reduceRight<GenericInput extends readonly unknown[], GenericReduceFrom extends number | string | bigint | boolean | ArrayReduceFromResult, GenericExit extends ArrayReduceExit = ArrayReduceExit<never>>(startValue: GenericReduceFrom, theFunction: (params: ArrayReduceFunctionParams<GenericInput, ArrayReduceFromValue<GenericReduceFrom>>) => ArrayReduceNext<ArrayReduceFromValue<GenericReduceFrom>> | GenericExit): (input: GenericInput) => ArrayReduceFromValue<GenericReduceFrom> | (IsEqual<GenericExit, ArrayReduceExit> extends true ? never : GenericExit["-exit"]);
export declare function reduceRight<GenericInput extends readonly unknown[], GenericReduceFrom extends number | string | bigint | boolean | ArrayReduceFromResult, GenericExit extends ArrayReduceExit = ArrayReduceExit<never>>(input: GenericInput, startValue: GenericReduceFrom, theFunction: (params: ArrayReduceFunctionParams<GenericInput, ArrayReduceFromValue<GenericReduceFrom>>) => ArrayReduceNext<ArrayReduceFromValue<GenericReduceFrom>> | GenericExit): ArrayReduceFromValue<GenericReduceFrom> | (IsEqual<GenericExit, ArrayReduceExit> extends true ? never : GenericExit["-exit"]);
