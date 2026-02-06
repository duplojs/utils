import { D, pipe } from "@scripts";

const threshold = D.create("2024-06-20");
const input = D.create("2024-06-20");

const result = D.greaterThan(input, threshold);
// result: false

pipe(
	input,
	D.greaterThan(threshold),
); // false
