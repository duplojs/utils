import { type NeverCoalescing } from "../common";
import { type Exit } from "./theFlow";
/**
 * Exits a flow when a predicate matches a value.
 * 
 * **Supported call styles:**
 * - Classic boolean predicate: `exitIf(value, thePredicate)` -> yields an exit effect or returns the value
 * - Classic predicate overload: `exitIf(value, thePredicate)` -> narrows the matched value type before exiting
 * 
 * `exitIf` is designed to be used inside `F.run(...)` or a nested flow executed by `F.exec(...)`.
 * When the predicate returns `true`, the current flow exits with the provided value.
 * When the predicate returns `false`, the original value is returned and the flow continues normally.
 * Because the exit effect is forwarded through nested `exec(...)` calls, it can stop a deeply nested flow from any depth.
 * 
 * ```ts
 * const thirdLevelFlow = F.create(
 * 	function *() {
 * 		yield *F.exitIf("stop", (value) => value === "stop");
 * 		return "done";
 * 	},
 * );
 * 
 * const secondLevelFlow = F.create(
 * 	function *() {
 * 		return yield *F.exec(thirdLevelFlow);
 * 	},
 * );
 * 
 * const firstLevelFlow = F.create(
 * 	function *() {
 * 		return yield *F.exec(secondLevelFlow);
 * 	},
 * );
 * 
 * F.run(
 * 	function *() {
 * 		return yield *F.exitIf(2, (value) => value === 2);
 * 	},
 * ); // 2
 * 
 * F.run(
 * 	function *() {
 * 		const value = yield *F.exitIf("keep", (value) => value === "stop");
 * 		return value;
 * 	},
 * ); // "keep"
 * 
 * F.run(
 * 	function *() {
 * 		yield *F.step("before deep exit");
 * 		return yield *F.exec(firstLevelFlow);
 * 	},
 * 	{ includeDetails: true },
 * ); // { result: "stop", steps: ["before deep exit"] }
 * ```
 * 
 * @remarks
 * - Use `exitIf` when the whole running flow should stop with a value
 * 
 * @see [`F.breakIf`](https://utils.duplojs.dev/en/v1/api/flow/breakIf) To stop only the current local flow branch
 * @see https://utils.duplojs.dev/en/v1/api/flow/exitIf
 * 
 * @namespace F
 * 
 */
export declare function exitIf<GenericValue extends unknown, GenericPredicate extends GenericValue>(value: GenericValue, thePredicate: (value: GenericValue) => value is GenericPredicate): Generator<Exit<NeverCoalescing<Extract<GenericValue, GenericPredicate>, GenericPredicate>>, Exclude<GenericValue, GenericPredicate>>;
export declare function exitIf<GenericValue extends unknown>(value: GenericValue, thePredicate: (value: GenericValue) => boolean): Generator<Exit<GenericValue>, GenericValue>;
