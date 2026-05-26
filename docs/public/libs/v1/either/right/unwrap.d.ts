import { type Unwrap } from "../../common/unwrap";
import { type Right } from "./create";
/**
 * Unwraps the payload of a `Right` and returns the input unchanged when the input is not a `Right`.
 * 
 * **Supported call styles:**
 * - Classic: `unwrapRight(input)` → returns an unwrapped value or the original input
 * 
 * Use this function when you want a non-throwing `Right`-only unwrap and you need to keep non-`Right` values flowing.
 * 
 * ```ts
 * const price = E.unwrapRight(
 * 	E.right("price.loaded", 99),
 * );
 * // type: 99
 * 
 * const unchanged = E.unwrapRight(
 * 	E.left("price.missing", "not found"),
 * );
 * // type: E.Left<"price.missing", "not found">
 * 
 * const total = pipe(
 * 	E.result("invoice.total", 450),
 * 	E.unwrapRight,
 * );
 * // type: 450
 * ```
 * 
 * @see [`E.unwrapRightOrThrow`](https://utils.duplojs.dev/en/v1/api/either/unwrapRightOrThrow)
 * @see [`E.isRight`](https://utils.duplojs.dev/en/v1/api/either/isRight)
 * @see https://utils.duplojs.dev/en/v1/api/either/unwrapRight
 * 
 * @namespace E
 * 
 */
export declare function unwrapRight<GenericInput extends unknown>(input: GenericInput): GenericInput extends Right ? Unwrap<GenericInput> : GenericInput;
