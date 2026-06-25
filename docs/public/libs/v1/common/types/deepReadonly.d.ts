export type DeepReadonly<GenericValue extends unknown> = GenericValue extends Record<number, unknown> & object ? {
    readonly [Prop in keyof GenericValue]: DeepReadonly<GenericValue[Prop]>;
} : GenericValue;
