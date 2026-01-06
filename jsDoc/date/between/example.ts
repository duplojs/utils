import { D, pipe } from "@scripts";

const start = D.create("2024-06-01");
const end = D.create("2024-06-30");
const input = D.create("2024-06-15");

const result = D.between(input, start, end);
// result: true

pipe(
	input,
	D.between(start, end),
); // result: true
