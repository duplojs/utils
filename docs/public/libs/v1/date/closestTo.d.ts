import type { TheDate } from "./types";
interface ClosestToParams {
    tieBreaker?: "favorPast" | "favorFuture";
}
/**
 * Finds the closest date to a target.
 * 
 * **Supported call styles:**
 * - Classic: `closestTo(input, target, params?)` → returns a value
 * - Curried: `closestTo(target, params?)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const inputs = [
 * 	D.create("2024-06-01"),
 * 	D.create("2024-06-10"),
 * 	D.create("2024-06-20"),
 * ] as const;
 * 
 * const target = D.create("2024-06-15");
 * const result = D.closestTo(inputs, target);
 * // result: "date1717996800000+" (10 June 2024)
 * 
 * pipe(
 * 	inputs,
 * 	D.closestTo(target),
 * ); // result: "date1717996800000+" (10 June 2024)
 * 
 * ```
 * 
 * @remarks
 * - `tieBreaker` can be "favorPast" or "favorFuture" to resolve equidistant dates.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/closestTo
 * 
 * @namespace D
 * 
 */
export declare function closestTo<GenericIterable extends Iterable<TheDate>>(target: TheDate, params?: ClosestToParams): (input: GenericIterable) => TheDate | undefined;
export declare function closestTo<GenericIterable extends Iterable<TheDate>>(input: GenericIterable, target: TheDate, params?: ClosestToParams): TheDate | undefined;
export {};
