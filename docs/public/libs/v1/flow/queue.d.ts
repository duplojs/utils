import { type OnlyLiteralNumber } from "../common";
/**
 * Reserves execution through the async flow queue and returns a resolver that releases the reserved slot.
 * 
 * **Supported call styles:**
 * - Classic: `queue()` -> yields a queue effect with concurrency `1`
 * - Classic with options: `queue({ concurrency })` -> yields a queue effect with the provided concurrency
 * 
 * `queue` is an async flow helper consumed by the runner.
 * It asks the runner to serialize or limit concurrent executions of the same flow.
 * When the slot is granted, the helper returns a `release` function that should be called once the protected section is finished.
 * 
 * ```ts
 * const saveFlow = F.create(
 * 	async function *(name: string) {
 * 		const release = yield *F.queue({
 * 			concurrency: 1,
 * 		});
 * 
 * 		try {
 * 			return await Promise.resolve(`saved:${name}` as const);
 * 		} finally {
 * 			release();
 * 		}
 * 	},
 * );
 * const saveUser = F.toFunction(saveFlow);
 * 
 * await saveUser("alice"); // Promise<"saved:alice">
 * 
 * await saveUser("bob"); // Promise<"saved:bob">
 * ```
 * 
 * @remarks
 * - `queue` is meaningful only in asynchronous flows handled by `F.run(...)`
 * - Reuse the same flow reference to share the same queue across runs
 * - If the same flow execution yields `queue(...)` multiple times, only the first yielded effect is applied by the runner
 * 
 * @see [`F.run`](https://utils.duplojs.dev/en/v1/api/flow/run) For queue-aware execution
 * @see https://utils.duplojs.dev/en/v1/api/flow/queue
 * 
 * @namespace F
 * 
 */
export declare function queue<GenericConcurrency extends number>(params?: {
    concurrency?: GenericConcurrency & OnlyLiteralNumber<GenericConcurrency>;
}): AsyncGenerator<import("./theFlow").Queue, () => void, unknown>;
