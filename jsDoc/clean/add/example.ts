import { C, pipe } from "@scripts";

const value = C.Number.createOrThrow(10);

const summed = C.add(value, 5);
// summed: C.Number

const curried = pipe(
	value,
	C.add(2),
);
// curried: C.Number

const combined = C.add(
	C.Number.createOrThrow(4),
	C.Number.createOrThrow(6),
);
// combined: C.Number
