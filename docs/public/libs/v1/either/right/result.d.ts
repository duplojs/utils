import { type Kind } from "../../common";
import { type Right } from "./create";
export declare const resultKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsEither/result", unknown>>;
type _Result<GenericInformation extends string = string, GenericValue extends unknown = unknown> = (Right<GenericInformation, GenericValue> & Kind<typeof resultKind.definition>);
export interface Result<GenericInformation extends string = string, GenericValue extends unknown = unknown> extends _Result<GenericInformation, GenericValue> {
}
/**
 * Builds a `Right` tagged as a neutral result: neither positive nor negative, just a result associated with business information and an optional payload.
 * 
 * **Supported call styles:**
 * - Classic: `result(information, value?)` → returns a value
 * 
 * Use `result` when you want to express that an operation produced a result without marking it as a success, an error, or a failure. The returned value keeps the provided information string and optionally embeds a payload.
 * 
 * ```ts
 * const created = E.result(
 * 	"user.created",
 * 	{
 * 		id: 1,
 * 		name: "Ada",
 * 	},
 * );
 * // type: E.Result<"user.created", { readonly id: 1; readonly name: "Ada"; }>
 * 
 * const skipped = E.result(
 * 	"user.skipped",
 * );
 * // type: E.Result<"user.skipped", undefined>
 * 
 * const computed = E.result(
 * 	"invoice.total",
 * 	1250,
 * );
 * // type: E.Result<"invoice.total", 1250>
 * ```
 * 
 * @see [`E.right`](https://utils.duplojs.dev/en/v1/api/either/right)
 * @see [`E.success`](https://utils.duplojs.dev/en/v1/api/either/success)
 * @see https://utils.duplojs.dev/en/v1/api/either/result
 * 
 * @namespace E
 * 
 */
export declare function result<GenericInformation extends string, const GenericValue extends unknown = undefined>(information: GenericInformation, value?: GenericValue): Result<GenericInformation, GenericValue>;
export {};
