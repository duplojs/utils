import { C, D, pipe } from "@scripts";

const numbers = [
	C.Number.createOrThrow(3),
	1,
	2,
];

const asc = C.sort(numbers, "ASC");
// asc: C.Number[]

const desc = pipe(
	numbers,
	C.sort("DSC"),
);
// desc: C.Number[]

const dates = C.sort([
	D.create("2024-01-02"),
	D.create("2024-01-01"),
], "ASC");
// dates: C.Date[]
