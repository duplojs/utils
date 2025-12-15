export type MayBeGetter<GenericValue extends unknown> = (() => GenericValue) | GenericValue;
