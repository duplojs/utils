import { type Defer } from "./theFlow";
/**
 * Registers a cleanup callback that runs when the flow finishes.
 * 
 * **Supported call styles:**
 * - Classic: `defer(theFunction)` -> yields a defer effect
 * 
 * `defer` stores a callback that is executed after the flow has completed.
 * It is useful for releasing resources, closing handles, or running cleanup logic after a `break` or a normal return.
 * Use it inside `F.run(...)` or inside subflows executed by `F.exec(...)`.
 * 
 * ```ts
 * F.run(
 * 	function *() {
 * 		yield *F.defer(() => void console.log("close connection"));
 * 		return "done";
 * 	},
 * ); // "done"
 * 
 * F.run(
 * 	function *() {
 * 		yield *F.defer(() => void console.log("clear cache"));
 * 		yield *F.breakIf(2, (value) => value === 2);
 * 		return "done";
 * 	},
 * ); // 2
 * 
 * await F.run(
 * 	async function *() {
 * 		yield *F.defer(async() => {
 * 			await Promise.resolve();
 * 		});
 * 		return Promise.resolve("done");
 * 	},
 * ); // Promise<"done">
 * ```
 * 
 * @remarks
 * - Deferred callbacks run after the flow result has been computed
 * 
 * @see [`F.finalizer`](https://utils.duplojs.dev/en/v1/api/flow/finalizer) To register final logic in the same flow system
 * @see https://utils.duplojs.dev/en/v1/api/flow/defer
 * 
 * @namespace F
 * 
 */
export declare function defer<GenericOutput extends unknown>(theFunction: () => GenericOutput): (Generator<Defer<GenericOutput>, undefined> | (GenericOutput extends Promise<unknown> ? AsyncGenerator<Defer<GenericOutput>, undefined> : never));
