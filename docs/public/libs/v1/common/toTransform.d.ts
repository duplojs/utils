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
export declare function toTransform<GenericValue extends unknown>(value: GenericValue): ToTransform<GenericValue>;
