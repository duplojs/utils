import { C, pipe } from "@scripts";

const value = C.Number.createOrThrow(4);

const scaled = C.multiply(value, 3);
// scaled: C.Number

const curried = pipe(
	value,
	C.multiply(2),
);
// curried: C.Number

const combined = C.multiply(
	C.Number.createOrThrow(5),
	C.Number.createOrThrow(6),
);
// combined: C.Number
