import { D, pipe } from "@scripts";

const threshold = D.create("2024-06-20");
const input = D.create("2024-06-20");

const predicate = D.greaterThan(input, threshold);
// result: true

pipe(
	input,
	D.greaterThan(threshold),
); // result: true
