import { D, pipe } from "@scripts";

const start = D.create("2024-06-01");
const end = D.create("2024-06-30");
const input = D.create("2024-06-30");

const result = D.betweenThan(input, start, end);
// result: false

pipe(
	input,
	D.betweenThan(start, end),
); // false
