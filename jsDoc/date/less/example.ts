import { D, pipe } from "@scripts";

const threshold = D.create("2024-06-20");
const input = D.create("2024-05-01");

const result = D.less(input, threshold);
// result: true

pipe(
	input,
	D.less(threshold),
); // true
