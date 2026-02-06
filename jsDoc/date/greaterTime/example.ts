import { D, pipe } from "@scripts";

const input = D.createTime(2, "hour");
const threshold = D.createTime(90, "minute");

const result = D.greaterTime(input, threshold);
// result: true

pipe(
	input,
	D.greaterTime(threshold),
); // true
