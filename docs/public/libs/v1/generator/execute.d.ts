import { type EscapeVoid } from "../common";
/**
 * Consumes an iterable or async iterable.
 * 
 * Signature: `execute(iterator)` → returns `void` or `Promise<void>`
 * 
 * This is useful for running generators with side effects.
 * 
 * ```ts
 * const source = [5, 10, 15, 20];
 * 
 * const iterator = G.asyncMap(
 * 	source,
 * 	async(value) => {
 * 		if (N.modulo(value, 2) === 0) {
 * 			await fetch("https://api.example.com/collect", {
 * 				method: "POST",
 * 				body: JSON.stringify({ value }),
 * 			});
 * 		}
 * 		return value;
 * 	},
 * );
 * 
 * await G.execute(iterator);
 * 
 * ```
 * 
 * @see [`G.loop`](https://utils.duplojs.dev/en/v1/api/generator/loop) For generating values
 * @see https://utils.duplojs.dev/en/v1/api/generator/execute
 * 
 * @namespace G
 * 
 */
export declare function execute<GenericIterator extends AsyncIterable<unknown> | Iterable<unknown>>(iterator: GenericIterator): GenericIterator extends AsyncIterable<unknown> ? Promise<void> : EscapeVoid;
