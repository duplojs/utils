/**
 * Registers a callback that the flow runner can execute before the next overlapping async run of the same flow continues.
 * 
 * **Supported call styles:**
 * - Classic: `calledByNext(theFunction)` -> yields a `called-by-next` effect
 * 
 * `calledByNext` declares a side callback on the current flow execution.
 * When the same async flow starts again while a previous callback is still registered, the runner executes the previous callback and replaces it with the new one.
 * This helper is mainly useful for cross-run invalidation or deferred refresh logic tied to async flow re-entry.
 * 
 * ```ts
 * const loadUsersFlow = F.create(
 * 	async function *(page: number) {
 * 		const controller = new AbortController();
 * 
 * 		yield *F.calledByNext(() => void controller.abort());
 * 
 * 		const response = await fetch(
 * 			`/api/users?page=${page}`,
 * 			{
 * 				signal: controller.signal,
 * 			},
 * 		);
 * 
 * 		return response.json();
 * 	},
 * );
 * const loadUsers = F.toFunction(loadUsersFlow);
 * 
 * const firstRequest = loadUsers(1);
 * const secondRequest = loadUsers(2);
 * // The second call aborts the first pending fetch.
 * 
 * ```
 * 
 * @remarks
 * - `calledByNext` is only observable through the async flow runner behavior
 * - Use a stable flow reference such as `F.create(...)` or `F.toFunction(...)` when you expect cross-run behavior
 * - If the same flow execution yields `calledByNext(...)` multiple times, only the first yielded effect is applied by the runner
 * 
 * @see [`F.run`](https://utils.duplojs.dev/en/v1/api/flow/run) For the runtime behavior that consumes this effect
 * @see https://utils.duplojs.dev/en/v1/api/flow/calledByNext
 * 
 * @namespace F
 * 
 */
export declare function calledByNext<GenericOutput extends unknown>(theFunction: () => GenericOutput): AsyncGenerator<import("./theFlow").CalledByNext<GenericOutput>, void, unknown>;
