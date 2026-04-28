export type DeepReadonly<GenericValue extends unknown> = GenericValue extends Record<number, unknown> ? {
    readonly [Prop in keyof GenericValue]: DeepReadonly<GenericValue[Prop]>;
} : GenericValue;
