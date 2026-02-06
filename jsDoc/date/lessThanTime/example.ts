import { D, pipe } from "@scripts";

const input = D.createTime(90, "minute");
const threshold = D.createTime(90, "minute");

const result = D.lessThanTime(input, threshold);
// result: false

pipe(
	input,
	D.lessThanTime(threshold),
); // false
