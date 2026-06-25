export type ToLargeEnsemble<GenericValue extends unknown> = GenericValue extends string ? string : GenericValue extends number ? number : GenericValue extends bigint ? bigint : GenericValue extends boolean ? boolean : GenericValue extends null ? null : GenericValue extends undefined ? undefined : GenericValue extends symbol ? symbol : GenericValue extends readonly [infer InferredValue, ...infer InferredRest] ? readonly [
    ToLargeEnsemble<InferredValue>,
    ...ToLargeEnsemble<InferredRest>
] : GenericValue extends readonly [] ? readonly [] : GenericValue extends (infer InferredValue)[] ? ToLargeEnsemble<InferredValue>[] : GenericValue extends Record<number, unknown> & object ? {
    readonly [Prop in keyof GenericValue]: ToLargeEnsemble<GenericValue[Prop]>;
} : GenericValue extends (...args: infer InferredArgs) => infer InferredReturn ? (...args: ToLargeEnsemble<InferredArgs>) => ToLargeEnsemble<InferredReturn> : GenericValue extends Promise<infer InferredValue> ? Promise<ToLargeEnsemble<InferredValue>> : GenericValue;
