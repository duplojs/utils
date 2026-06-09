import { C, pipe } from "@scripts";

const value = C.Number.createOrThrow(12);
const divisor = C.NotZero.createOrThrow(3);

const ratio = C.divide(value, divisor);
// ratio: C.Number

const curried = pipe(
	value,
	C.divide(C.NotZero.createOrThrow(2)),
);
// curried: C.Number

const combined = C.divide(
	C.Number.createOrThrow(20),
	C.NotZero.createOrThrow(5),
);
// combined: C.Number
