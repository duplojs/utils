import { type Unwrap } from "../../common/unwrap";
import { type Left } from "./create";
declare const NotLeftError_base: import("../../common/kindClass").KindClass<import("../..").KindHandler<import("../..").KindDefinition<"@DuplojsUtilsError/not-left-error", unknown>>, ErrorConstructor>;
export declare class NotLeftError extends NotLeftError_base {
    value: unknown;
    constructor(value: unknown);
}
/**
 * Unwraps the payload of a `Left` and throws when the input is not a `Left`.
 * 
 * **Supported call styles:**
 * - Classic: `unwrapLeftOrThrow(input)` → returns a value
 * 
 * Use this function when your code requires the payload of a `Left` immediately and treating any other case as an exceptional path is acceptable. When the input is not a `Left`, it throws a `NotLeftError`.
 * 
 * ```ts
 * const reason = E.unwrapLeftOrThrow(
 * 	E.left("user.rejected", "missing email"),
 * );
 * // type: "missing email"
 * 
 * const error = E.unwrapLeftOrThrow(
 * 	E.error("invalid payload"),
 * );
 * // type: "invalid payload"
 * 
 * const value = pipe(
 * 	E.left("invoice.blocked", 403),
 * 	E.unwrapLeftOrThrow,
 * );
 * // type: 403
 * ```
 * 
 * @remarks
 * - Throws `E.NotLeftError` when the input does not carry the `Left` kind.
 * 
 * @see [`E.isLeft`](https://utils.duplojs.dev/en/v1/api/either/isLeft)
 * @see [`E.left`](https://utils.duplojs.dev/en/v1/api/either/left)
 * @see https://utils.duplojs.dev/en/v1/api/either/unwrapLeftOrThrow
 * 
 * @namespace E
 * 
 */
export declare function unwrapLeftOrThrow<GenericInput extends unknown>(input: GenericInput): Unwrap<Extract<GenericInput, Left>>;
export {};
