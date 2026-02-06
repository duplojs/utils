import { D, pipe } from "@scripts";

const threshold = D.create("2024-06-01");
const input = D.create("2024-06-20");

const result = D.greater(input, threshold);
// result: true

pipe(
	input,
	D.greater(threshold),
); // true
