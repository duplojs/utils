import { C, pipe } from "@scripts";

const value = C.Number.createOrThrow(10);

const reduced = C.subtract(value, 3);
// reduced: C.Number

const curried = pipe(
	value,
	C.subtract(2),
);
// curried: C.Number

const combined = C.subtract(
	C.Number.createOrThrow(8),
	C.Number.createOrThrow(5),
);
// combined: C.Number
