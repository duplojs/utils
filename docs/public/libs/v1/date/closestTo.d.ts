import { TheDate } from "./theDate";
import type { SerializedTheDate } from "./types";
interface ClosestToParams {
    tieBreaker?: "favorPast" | "favorFuture";
}
/**
 * Finds the closest date from an iterable relative to a target date.
 * 
 * **Supported call styles:**
 * - Classic: `closestTo(input, target, params?)` → `TheDate | undefined`
 * - Curried: `closestTo(target, params?)` → `(input) => TheDate | undefined`
 * 
 * ```ts
 * const inputs = [
 * 	D.create("2024-06-01"),
 * 	D.create("2024-06-10"),
 * 	D.create("2024-06-20"),
 * ] as const;
 * 
 * const target = D.create("2024-06-15");
 * const nearest = D.closestTo(inputs, target);
 * // nearest: TheDate | undefined
 * 
 * const nearestPast = D.closestTo(inputs, target, {
 * 	tieBreaker: "favorPast",
 * });
 * // nearestPast: TheDate | undefined
 * 
 * ```
 * 
 * @remarks
 * - `tieBreaker: "favorPast"` ignores future candidates.
 * - `tieBreaker: "favorFuture"` ignores past candidates.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/closestTo
 * 
 * @namespace D
 * 
 */
export declare function closestTo<GenericIterable extends Iterable<TheDate | SerializedTheDate>>(target: TheDate | SerializedTheDate, params?: ClosestToParams): (input: GenericIterable) => TheDate | undefined;
export declare function closestTo<GenericIterable extends Iterable<TheDate | SerializedTheDate>>(input: GenericIterable, target: TheDate | SerializedTheDate, params?: ClosestToParams): TheDate | undefined;
export {};
