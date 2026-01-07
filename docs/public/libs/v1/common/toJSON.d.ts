import { type AnyFunction } from "./types/anyFunction";
import { type IsEqual } from "./types/isEqual";
export type ToJSON<GenericValue extends unknown> = GenericValue extends number | string | null | undefined ? GenericValue : GenericValue extends ({
    toJSON: AnyFunction;
}) ? ReturnType<GenericValue["toJSON"]> : GenericValue extends [infer InferredFirst, ...infer InferredRest] ? [
    ToJSON<InferredFirst>,
    ...(ToJSON<InferredRest> extends infer InferredSubRest extends any[] ? IsEqual<InferredSubRest, never[]> extends false ? InferredSubRest : [] : [])
] : GenericValue extends any[] ? ToJSON<GenericValue[number]>[] : GenericValue extends object ? {
    [Prop in keyof GenericValue as GenericValue[Prop] extends AnyFunction ? never : Prop]: ToJSON<GenericValue[Prop]>;
} : undefined;
/**
 * The toJSON() function prepares a value for JSON serialization while respecting objects' toJSON methods, traversing arrays/tuples, and excluding functions.
 * 
 * Signature: `toJSON(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const result = toJSON({
 * 	prop: 1,
 * 	prop1: "test",
 * 	prop2: new Date("2025-08-19T15:14:19.467Z"),
 * 	prop3: null,
 * 	prop4: undefined,
 * 	prop5: {
 * 		subProp: [{ prop1: 1 }],
 * 		subProp1: {
 * 			toJSON() {
 * 				return "test";
 * 			},
 * 		},
 * 	},
 * 	method() {
 * 		return void 0;
 * 	},
 * });
 * 
 * // type: { prop: number; prop1: string; prop2: string; prop3: null; prop4: undefined; prop5: { subProp: { prop1: number; }[]; subProp1: "test"; }; }
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/toJSON
 * 
 * @namespace C
 * 
 */
export declare function toJSON<GenericValue extends unknown>(value: GenericValue): ToJSON<GenericValue>;
