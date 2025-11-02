export type UnwrapArray<GenericValue extends unknown> = GenericValue extends readonly any[] ? GenericValue[number] : GenericValue;
