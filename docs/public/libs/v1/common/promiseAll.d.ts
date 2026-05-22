import { type AnyTuple } from "./types";
/**
 * The promiseAll() function resolves all values from a tuple or any iterable and preserves precise typing for tuple inputs.
 * 
 * Signature: `promiseAll(input)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const tupleInput = [
 * 	Promise.resolve(1),
 * 	"hello",
 * 	Promise.resolve(true),
 * ] as const;
 * 
 * const tupleResult = await promiseAll(tupleInput);
 * // type: [1, "hello", boolean]
 * 
 * const iterableInput: Iterable<number | Promise<number>> = new Set([
 * 	1,
 * 	Promise.resolve(2),
 * 	3,
 * ]);
 * 
 * const iterableResult = await promiseAll(iterableInput);
 * // type: number[]
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/promiseAll
 * 
 */
export declare function promiseAll<const GenericInput extends AnyTuple | Iterable<unknown>>(input: GenericInput): GenericInput extends AnyTuple ? Promise<{
    -readonly [Prop in keyof GenericInput]: Awaited<GenericInput[Prop]>;
}> : GenericInput extends Iterable<infer InferredValue> ? Promise<Awaited<InferredValue>[]> : never;
