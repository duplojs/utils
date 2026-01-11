/**
 * Creates an array from an iterable or array-like value.
 * 
 * Signature: `from(input)` → returns an array or a promise
 * 
 * Async iterables return a `Promise` of an array.
 * 
 * ```ts
 * A.from(
 * 	"ab",
 * ); // ["a", "b"]
 * 
 * A.from(
 * 	new Set([1, 2]),
 * ); // [1, 2]
 * 
 * A.from(
 * 	{
 * 		0: "alpha",
 * 		1: "beta",
 * 		length: 2,
 * 	},
 * ); // ["alpha", "beta"]
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`Array.from`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) for sync inputs
 * 
 * @see https://utils.duplojs.dev/en/v1/api/array/from
 * 
 * @namespace A
 * 
 */
export declare function from<const GenericArray extends (ArrayLike<unknown> | Iterable<unknown> | AsyncIterable<unknown>)>(input: GenericArray): GenericArray extends AsyncIterable<infer InferredValue> ? Promise<InferredValue[]> : GenericArray extends Iterable<infer InferredValue> ? InferredValue[] : GenericArray extends ArrayLike<infer InferredValue> ? InferredValue[] : never;
