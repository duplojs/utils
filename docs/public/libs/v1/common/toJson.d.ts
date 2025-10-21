import { type AnyFunction } from "./types/anyFunction";
import { type IsEqual } from "./types/isEqual";
export type ToJSON<GenericValue extends unknown> = GenericValue extends number | string | null | undefined ? GenericValue : GenericValue extends ({
    toJSON: AnyFunction;
}) ? ReturnType<GenericValue["toJSON"]> : GenericValue extends [infer InferredFirst, ...infer InferredRest] ? [
    ToJSON<InferredFirst>,
    ...(ToJSON<InferredRest> extends infer InferredSubRest extends any[] ? IsEqual<InferredSubRest, never[]> extends false ? InferredSubRest : [] : [])
] : GenericValue extends any[] ? ToJSON<GenericValue[number]>[] : GenericValue extends Record<number, unknown> ? {
    [Prop in keyof GenericValue as GenericValue[Prop] extends AnyFunction ? never : Prop]: ToJSON<GenericValue[Prop]>;
} : undefined;
export declare function toJSON<GenericValue extends unknown>(value: GenericValue): ToJSON<GenericValue>;
