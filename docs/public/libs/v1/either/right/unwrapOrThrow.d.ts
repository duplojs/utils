import { type Unwrap } from "../../common/unwrap";
import { type Right } from "./create";
declare const NotRightError_base: import("../../common/kindClass").KindClass<import("../..").KindHandler<import("../..").KindDefinition<"@DuplojsUtilsError/not-right-error", unknown>>, ErrorConstructor>;
export declare class NotRightError extends NotRightError_base {
    value: unknown;
    constructor(value: unknown);
}
/**
 * Unwraps the payload of a `Right` and throws when the input is not a `Right`.
 * 
 * **Supported call styles:**
 * - Classic: `unwrapRightOrThrow(input)` → returns a value
 * 
 * Use this function when your code requires the payload of a `Right` immediately and treating any other case as an exceptional path is acceptable. When the input is not a `Right`, it throws a `NotRightError`.
 * 
 * ```ts
 * const price = E.unwrapRightOrThrow(
 * 	E.right("price.computed", 24),
 * );
 * // type: 24
 * 
 * const empty = E.unwrapRightOrThrow(
 * 	E.success("ok"),
 * );
 * // type: "ok"
 * 
 * const total = pipe(
 * 	E.result("invoice.total", 1200),
 * 	E.unwrapRightOrThrow,
 * );
 * // type: 1200
 * ```
 * 
 * @remarks
 * - Throws `E.NotRightError` when the input does not carry the `Right` kind.
 * 
 * @see [`E.isRight`](https://utils.duplojs.dev/en/v1/api/either/isRight)
 * @see [`E.right`](https://utils.duplojs.dev/en/v1/api/either/right)
 * @see https://utils.duplojs.dev/en/v1/api/either/unwrapRightOrThrow
 * 
 * @namespace E
 * 
 */
export declare function unwrapRightOrThrow<GenericInput extends unknown>(input: GenericInput): Unwrap<Extract<GenericInput, Right>>;
export {};
