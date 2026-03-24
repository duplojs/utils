import { type NeverCoalescing } from "../common";
import { type Break } from "./theFlow";
/**
 * Breaks a flow when a predicate matches a value.
 * 
 * **Supported call styles:**
 * - Classic boolean predicate: `breakIf(value, thePredicate)` -> yields a break effect or returns the value
 * - Classic predicate overload: `breakIf(value, thePredicate)` -> narrows the matched value type before breaking
 * 
 * `breakIf` is designed to be used inside `F.run(...)` or a nested flow executed by `F.exec(...)`.
 * When the predicate returns `true`, the current flow stops with the provided value as a break result.
 * When the predicate returns `false`, the original value is returned and the flow continues normally.
 * 
 * ```ts
 * F.run(
 * 	function *() {
 * 		yield *F.breakIf(2, (value) => value === 2);
 * 
 * 		return "test";
 * 	},
 * ); // 2
 * 
 * F.run(
 * 	function *() {
 * 		const value = yield *F.breakIf("keep", (value) => value === "stop");
 * 		return value;
 * 	},
 * ); // "keep"
 * 
 * F.run(
 * 	function *() {
 * 		yield *F.step("before break");
 * 		yield *F.breakIf(2, (value) => value === 2);
 * 		return "done";
 * 	},
 * 	{ includeDetails: true },
 * ); // { result: 2, steps: ["before break"] }
 * ```
 * 
 * @remarks
 * - Use `breakIf` to stop the current flow without exiting outer flows
 * 
 * @see [`F.exitIf`](https://utils.duplojs.dev/en/v1/api/flow/exitIf) To exit a flow instead of breaking it
 * @see https://utils.duplojs.dev/en/v1/api/flow/breakIf
 * 
 * @namespace F
 * 
 */
export declare function breakIf<GenericValue extends unknown, GenericPredicate extends GenericValue>(value: GenericValue, thePredicate: (value: GenericValue) => value is GenericPredicate): Generator<Break<NeverCoalescing<Extract<GenericValue, GenericPredicate>, GenericPredicate>>, Exclude<GenericValue, GenericPredicate>>;
export declare function breakIf<GenericValue extends unknown>(value: GenericValue, thePredicate: (value: GenericValue) => boolean): Generator<Break<GenericValue>, GenericValue>;
