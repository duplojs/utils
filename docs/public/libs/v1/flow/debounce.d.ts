/**
 * Delays a flow execution and cancels the previous run when a new one arrives before the delay ends.
 * 
 * **Supported call styles:**
 * - Classic: `debounce(time)` -> yields a debounce effect
 * - Classic with options: `debounce(time, params)` -> yields a debounce effect with a fallback return value
 * 
 * `debounce` lets the runner wait before continuing the current run of the same flow.
 * If another run starts during that delay, the previous run is cancelled and can return `params.returnValue`.
 * This makes it useful for search inputs, refresh triggers, or any async flow where only the latest call should continue.
 * 
 * ```ts
 * const searchFlow = F.create(
 * 	async function *(query: string) {
 * 		yield *F.debounce(
 * 			300,
 * 			{ returnValue: "skipped" as const },
 * 		);
 * 		return Promise.resolve(query);
 * 	},
 * );
 * const runSearch = F.toFunction(searchFlow);
 * 
 * void runSearch("first"); // Promise<"first" | "skipped">
 * 
 * void runSearch("second"); // Promise<"second" | "skipped">
 * 
 * const refreshFlow = F.create(
 * 	async function *(section: string) {
 * 		yield *F.debounce(500);
 * 		return Promise.resolve(section);
 * 	},
 * );
 * const runRefresh = F.toFunction(refreshFlow);
 * await runRefresh("users"); // Promise<"users" | undefined>
 * 
 * const saveFlow = F.create(
 * 	async function *(name: string) {
 * 		yield *F.debounce(
 * 			200,
 * 			{ returnValue: "cancelled" as const },
 * 		);
 * 		return Promise.resolve(`saved:${name}` as const);
 * 	},
 * );
 * const runSave = F.toFunction(saveFlow);
 * await runSave("alice"); // Promise<`saved:${string}` | "cancelled">
 * ```
 * 
 * @remarks
 * - `debounce` is an async generator because the runner always waits before continuing the preserved run
 * - Debounce state is attached to the flow reference, so examples should reuse the same created flow or wrapped function
 * - If the same flow execution yields `debounce(...)` multiple times, only the first yielded effect is applied by the runner
 * 
 * @see [`F.run`](https://utils.duplojs.dev/en/v1/api/flow/run) For the debounce behavior implemented by the runner
 * @see https://utils.duplojs.dev/en/v1/api/flow/debounce
 * 
 * @namespace F
 * 
 */
export declare function debounce<GenericValue extends unknown = undefined>(time: number, params?: {
    returnValue?: GenericValue;
}): AsyncGenerator<import("./theFlow").Debounce<GenericValue | undefined>, void, unknown>;
