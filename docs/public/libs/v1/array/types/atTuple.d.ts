export type AtTuple<GenericTuple extends readonly unknown[], GenericIndex extends number> = GenericIndex extends keyof GenericTuple ? GenericTuple[GenericIndex] : undefined;
