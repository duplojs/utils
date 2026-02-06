import { type TheDate } from "../../../../date";
import { type Date } from "../../base";
import { type AnyTuple } from "../../../../common";
/**
 * Returns the latest wrapped `Date` from a tuple.
 * 
 * **Supported call styles:**
 * - Classic: `dateMax(input)` → `Date`
 * 
 * `input` can mix wrapped `Date` and raw `TheDate` values.
 * 
 * ```ts
 * const latest = C.dateMax([
 * 	C.Date.createOrThrow(D.create("2024-03-01")),
 * 	D.create("2024-02-01"),
 * 	D.create("2024-04-01"),
 * ]);
 * // latest: C.Date
 * 
 * const mixed = C.dateMax([
 * 	C.Date.createOrThrow(D.create("2024-01-08")),
 * 	D.create("2024-01-07"),
 * ]);
 * // mixed: C.Date
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/dateMax
 * 
 * @namespace C
 * 
 */
export declare function dateMax(input: AnyTuple<Date | TheDate>): Date;
