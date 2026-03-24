import { type Finalizer } from "./theFlow";
/**
 * Registers a final callback handled by the flow runner.
 * 
 * **Supported call styles:**
 * - Classic: `finalizer(theFunction)` -> yields a finalizer effect
 * 
 * `finalizer` registers logic that is executed by the flow runner when the flow completes.
 * It is useful for cleanup or post-processing that should stay inside the flow effect system.
 * Use it inside `F.run(...)` or inside subflows executed by `F.exec(...)`.
 * 
 * ```ts
 * F.run(
 * 	function *() {
 * 		yield *F.finalizer(() => void console.log("close connection"));
 * 		return "done";
 * 	},
 * ); // "done"
 * 
 * F.run(
 * 	function *() {
 * 		yield *F.finalizer(() => void console.log("clear cache"));
 * 		yield *F.breakIf(2, (value) => value === 2);
 * 		return "done";
 * 	},
 * ); // 2
 * 
 * await F.run(
 * 	async function *() {
 * 		yield *F.finalizer(async() => {
 * 			await Promise.resolve();
 * 		});
 * 		return Promise.resolve("done");
 * 	},
 * ); // Promise<"done">
 * ```
 * 
 * @remarks
 * - Finalizers are collected by the flow runner and executed after the flow ends
 * 
 * @see [`F.defer`](https://utils.duplojs.dev/en/v1/api/flow/defer) For another cleanup-oriented effect
 * @see https://utils.duplojs.dev/en/v1/api/flow/finalizer
 * 
 * @namespace F
 * 
 */
export declare function finalizer<GenericOutput extends unknown>(theFunction: () => GenericOutput): (Generator<Finalizer<GenericOutput>, undefined> | (GenericOutput extends Promise<unknown> ? AsyncGenerator<Finalizer<GenericOutput>, undefined> : never));
