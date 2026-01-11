import { C } from "@scripts";

const largest = C.max([
	C.Number.createOrThrow(3),
	10,
	1,
]);
// largest: C.Number

const fromRaw = C.max([2, 8, 4]);
// fromRaw: C.Number

const mixed = C.max([
	C.Number.createOrThrow(5),
	C.Number.createOrThrow(2),
	9,
]);
// mixed: C.Number
