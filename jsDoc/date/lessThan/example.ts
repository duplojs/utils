import { D, pipe } from "@scripts";

const threshold = D.create("2024-06-20");
const input = D.create("2024-06-20");

const result = D.lessThan(input, threshold);
// result: false

pipe(
	input,
	D.lessThan(threshold),
); // false
