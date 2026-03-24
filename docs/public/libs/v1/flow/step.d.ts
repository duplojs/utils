import { type Step } from "./theFlow";
/**
 * Registers a named step in a flow and can optionally compute a value.
 * 
 * **Supported call styles:**
 * - Classic without callback: `step(name)` -> yields a step effect and returns `undefined`
 * - Classic with callback: `step(name, theFunction)` -> yields a step effect and returns the callback result
 * 
 * `step` records a named execution step that can be collected by `F.run(...)` when `includeDetails` is enabled.
 * It can also wrap a synchronous or asynchronous callback and return its result while still emitting the step.
 * Use it to make a flow easier to observe without changing its control flow.
 * 
 * ```ts
 * F.run(
 * 	function *() {
 * 		yield *F.step("load config");
 * 		return "done";
 * 	},
 * 	{ includeDetails: true },
 * ); // { result: "done", steps: ["load config"] }
 * 
 * F.run(
 * 	function *() {
 * 		const user = yield *F.step("read cache", () => "user-1");
 * 		return user;
 * 	},
 * ); // "user-1"
 * ```
 * 
 * @remarks
 * - Steps are only collected in the final result when `includeDetails` is enabled
 * 
 * @see [`F.run`](https://utils.duplojs.dev/en/v1/api/flow/run) For collecting step details
 * @see https://utils.duplojs.dev/en/v1/api/flow/step
 * 
 * @namespace F
 * 
 */
export declare function step<GenericName extends string, GenericOutput extends unknown = void>(name: GenericName, theFunction?: () => GenericOutput): (GenericOutput extends Promise<unknown> ? AsyncGenerator<Step<GenericName>, Awaited<GenericOutput>> : Generator<Step<GenericName>, GenericOutput>);
