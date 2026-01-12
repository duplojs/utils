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
	D.createTheDate(2),
	D.createTheDate(1),
], "ASC");
// dates: C.Date[]
