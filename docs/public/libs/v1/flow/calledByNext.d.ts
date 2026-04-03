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
 * const refreshFlow = F.create(
 * 	async function *(label: string) {
 * 		yield *F.calledByNext(() => void console.log(`refresh ${label}`));
 * 		return Promise.resolve(label);
 * 	},
 * );
 * 
 * await F.run(
 * 	refreshFlow,
 * 	{ input: "users" },
 * ); // Promise<"users">
 * 
 * const runRefreshFlow = F.toFunction(refreshFlow);
 * await runRefreshFlow("dashboard"); // Promise<"dashboard">
 * 
 * const nestedRefreshFlow = F.create(
 * 	async function *() {
 * 		yield *F.exec(refreshFlow, { input: "reports" });
 * 		return Promise.resolve("nested");
 * 	},
 * );
 * await F.run(nestedRefreshFlow); // Promise<"nested">
 * ```
 * 
 * @remarks
 * - `calledByNext` is only observable through the async flow runner behavior
 * - Use a stable flow reference such as `F.create(...)` or `F.toFunction(...)` when you expect cross-run behavior
 * 
 * @see [`F.run`](https://utils.duplojs.dev/en/v1/api/flow/run) For the runtime behavior that consumes this effect
 * @see https://utils.duplojs.dev/en/v1/api/flow/calledByNext
 * 
 * @namespace F
 * 
 */
export declare function calledByNext<GenericOutput extends unknown>(theFunction: () => GenericOutput): AsyncGenerator<import("./theFlow").CalledByNext<GenericOutput>, void, unknown>;
