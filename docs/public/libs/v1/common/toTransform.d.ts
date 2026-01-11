import { type AnyFunction } from "./types/anyFunction";
import { type IsEqual } from "./types/isEqual";
export type ToTransform<GenericValue extends unknown> = GenericValue extends number | string | null | undefined ? GenericValue : GenericValue extends ({
    toTransform: AnyFunction;
}) ? ReturnType<GenericValue["toTransform"]> : GenericValue extends [infer InferredFirst, ...infer InferredRest] ? [
    ToTransform<InferredFirst>,
    ...(ToTransform<InferredRest> extends infer InferredSubRest extends any[] ? IsEqual<InferredSubRest, never[]> extends false ? InferredSubRest : [] : [])
] : GenericValue extends any[] ? ToTransform<GenericValue[number]>[] : GenericValue extends Record<number, unknown> ? {
    [Prop in keyof GenericValue]: ToTransform<GenericValue[Prop]>;
} : GenericValue;
/**
 * The toTransform() function recursively applies objects' toTransform methods and traverses arrays/tuples to produce a value ready to be transported (DTO).
 * 
 * Signature: `toTransform(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * class Money {
 * 	public constructor(
 * 		public amount: number,
 * 		public currency: string,
 * 	) {}
 * 
 * 	public toTransform() {
 * 		return {
 * 			amount: this.amount,
 * 			currency: this.currency,
 * 		};
 * 	}
 * }
 * 
 * const input = {
 * 	id: "INV-1",
 * 	total: new Money(99, "EUR"),
 * 	lines: [
 * 		new Money(49.5, "EUR"),
 * 		new Money(49.5, "EUR"),
 * 	],
 * };
 * 
 * const result = toTransform(input);
 * 
 * // type: { id: string; total: { amount: number; currency: string; }; lines: { amount: number; currency: string; }[]; }
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/toTransform
 * 
 * @namespace C
 * 
 */
export declare function toTransform<GenericValue extends unknown>(value: GenericValue): ToTransform<GenericValue>;
