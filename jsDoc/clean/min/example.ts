import { C } from "@scripts";

const smallest = C.min([
	C.Number.createOrThrow(3),
	10,
	1,
]);
// smallest: C.Number

const fromRaw = C.min([2, 8, 4]);
// fromRaw: C.Number

const mixed = C.min([
	C.Number.createOrThrow(5),
	C.Number.createOrThrow(2),
	9,
]);
// mixed: C.Number
