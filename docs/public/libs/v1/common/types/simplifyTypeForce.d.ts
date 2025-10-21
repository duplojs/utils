export type SimplifyTypeForce<GenericValue extends unknown> = GenericValue extends object ? {
    [Prop in keyof GenericValue]: SimplifyTypeForce<GenericValue[Prop]>;
} : GenericValue;
