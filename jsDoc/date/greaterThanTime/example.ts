import { D, pipe } from "@scripts";

const input = D.createTime(2, "hour");
const threshold = D.createTime(2, "hour");

const result = D.greaterThanTime(input, threshold);
// result: false

pipe(
	input,
	D.greaterThanTime(threshold),
); // false
