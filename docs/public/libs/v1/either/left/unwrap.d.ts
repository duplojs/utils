import { type Unwrap } from "../../common/unwrap";
import { type Left } from "./create";
/**
 * Unwraps the payload of a `Left` and returns the input unchanged when the input is not a `Left`.
 * 
 * **Supported call styles:**
 * - Classic: `unwrapLeft(input)` → returns an unwrapped value or the original input
 * 
 * Use this function when you want a non-throwing `Left`-only unwrap and you need to keep non-`Left` values flowing.
 * 
 * ```ts
 * const reason = E.unwrapLeft(
 * 	E.left("payment.rejected", "insufficient funds"),
 * );
 * // type: "insufficient funds"
 * 
 * const unchanged = E.unwrapLeft(
 * 	E.right("payment.accepted", 120),
 * );
 * // type: E.Right<"payment.accepted", 120>
 * 
 * const fallback = pipe(
 * 	E.error("network down"),
 * 	E.unwrapLeft,
 * );
 * // type: "network down"
 * ```
 * 
 * @see [`E.unwrapLeftOrThrow`](https://utils.duplojs.dev/en/v1/api/either/unwrapLeftOrThrow)
 * @see [`E.isLeft`](https://utils.duplojs.dev/en/v1/api/either/isLeft)
 * @see https://utils.duplojs.dev/en/v1/api/either/unwrapLeft
 * 
 * @namespace E
 * 
 */
export declare function unwrapLeft<GenericInput extends unknown>(input: GenericInput): GenericInput extends Left ? Unwrap<GenericInput> : GenericInput;
