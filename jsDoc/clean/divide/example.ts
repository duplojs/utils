import { C, pipe } from "@scripts";

const value = C.Number.createOrThrow(12);

const ratio = C.divide(value, 3);
// ratio: C.Number

const curried = pipe(
	value,
	C.divide(2),
);
// curried: C.Number

const combined = C.divide(
	C.Number.createOrThrow(20),
	C.Number.createOrThrow(5),
);
// combined: C.Number
