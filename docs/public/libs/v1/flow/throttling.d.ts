import { type OnlyLiteralBoolean, type IsEqual } from "../common";
import { type Throttling } from "./theFlow";
/**
 * Throttles repeated runs of the same flow and can return a fallback value when a run happens too early.
 * 
 * **Supported call styles:**
 * - Classic: `throttling(time)` -> yields a throttling effect
 * - Classic with options: `throttling(time, params)` -> yields a throttling effect with a fallback return value and optional `keepLast`
 * 
 * `throttling` lets the runner decide whether the current run should continue or stop early depending on the previous execution time of the same flow.
 * When a run happens inside the throttling window, the runner can return `params.returnValue`.
 * With `keepLast: true`, the runner keeps the last skipped async run and resumes it after the delay.
 * 
 * ```ts
 * const searchFlow = F.create(
 * 	function *(query: string) {
 * 		yield *F.throttling(
 * 			300,
 * 			{ returnValue: "skipped" as const },
 * 		);
 * 		return query;
 * 	},
 * );
 * const runSearch = F.toFunction(searchFlow);
 * 
 * runSearch("first"); // "first"
 * 
 * runSearch("second"); // "skipped"
 * 
 * const latestFlow = F.create(
 * 	async function *(value: string) {
 * 		yield *F.throttling(
 * 			500,
 * 			{
 * 				returnValue: "ignored" as const,
 * 				keepLast: true,
 * 			},
 * 		);
 * 		return Promise.resolve(value);
 * 	},
 * );
 * const runLatestFlow = F.toFunction(latestFlow);
 * await runLatestFlow("latest"); // Promise<"latest" | "ignored">
 * ```
 * 
 * @remarks
 * - `keepLast: true` changes the helper to an async generator because the runner may resume the latest skipped run later
 * - Throttling state is attached to the flow reference, so examples should reuse the same created flow or wrapped function
 * - If the same flow execution yields `throttling(...)` multiple times, only the first yielded effect is applied by the runner
 * 
 * @see [`F.run`](https://utils.duplojs.dev/en/v1/api/flow/run) For the throttling behavior implemented by the runner
 * @see https://utils.duplojs.dev/en/v1/api/flow/throttling
 * 
 * @namespace F
 * 
 */
export declare function throttling<GenericValue extends unknown = undefined, GenericKeepLast extends boolean = false>(time: number, params?: {
    returnValue?: GenericValue;
    keepLast?: GenericKeepLast & OnlyLiteralBoolean<GenericKeepLast>;
}): IsEqual<GenericKeepLast, true> extends true ? AsyncGenerator<Throttling<NoInfer<GenericValue>>, undefined> : Generator<Throttling<NoInfer<GenericValue>>, undefined>;
