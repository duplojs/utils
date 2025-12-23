export type ArrayCoalescing<GenericValue extends unknown> = GenericValue extends readonly any[] ? GenericValue : readonly [GenericValue];
