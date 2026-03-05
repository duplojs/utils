import type { TheDate } from "../theDate";
import type { SerializedTheDate } from "../types";
/**
 * Checks whether two dates point to the same timestamp.
 * 
 * **Supported call styles:**
 * - Classic: `equal(first, second)` -> `boolean`
 * - Curried: `equal(second)` -> `(first) => boolean`
 * 
 * All parameters accept `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const first = D.create("2024-06-20");
 * const second = D.create("2024-06-20");
 * 
 * if (D.equal(first, second)) {
 * 	// is equal
 * }
 * 
 * const serialized = D.serialize(second);
 * D.equal(first, serialized); // true
 * ```
 * 
 * @remarks
 * - Equality is based on normalized timestamps.
 * 
 * @see [`D.greater`](https://utils.duplojs.dev/en/v1/api/date/greater) For inclusive greater-than comparison
 * @see [`D.less`](https://utils.duplojs.dev/en/v1/api/date/less) For inclusive less-than comparison
 * @see https://utils.duplojs.dev/en/v1/api/date/equal
 * 
 * @namespace D
 * 
 */
export declare function equal(second: TheDate | SerializedTheDate): (first: TheDate | SerializedTheDate) => boolean;
export declare function equal(first: TheDate | SerializedTheDate, second: TheDate | SerializedTheDate): boolean;
