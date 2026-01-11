import { type TheDate } from "../../../../date";
import { type Date } from "../../base";
import { type AnyTuple } from "../../../../common";
/**
 * Returns the earliest date from a tuple of Date values.
 * 
 * **Supported call styles:**
 * - Classic: `dateMin(input)` -> returns a Date
 * 
 * The input can mix wrapped Dates and raw TheDate values.
 * 
 * ```ts
 * const earliest = C.dateMin([
 * 	C.Date.createOrThrow(D.create("2024-03-01")),
 * 	D.create("2024-02-01"),
 * 	D.create("2024-04-01"),
 * ]);
 * // earliest: C.Date
 * 
 * const fromRaw = C.dateMin([
 * 	D.create("2024-01-05"),
 * 	D.create("2024-01-03"),
 * 	D.create("2024-01-10"),
 * ]);
 * // fromRaw: C.Date
 * 
 * const mixed = C.dateMin([
 * 	C.Date.createOrThrow(D.create("2024-01-08")),
 * 	D.create("2024-01-07"),
 * ]);
 * // mixed: C.Date
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/dateMin
 * 
 * @namespace C
 * 
 */
export declare function dateMin(input: AnyTuple<Date | TheDate>): Date;
