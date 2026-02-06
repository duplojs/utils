import { D, pipe } from "@scripts";

const input = D.createTime(90, "minute");
const threshold = D.createTime(2, "hour");

const result = D.lessTime(input, threshold);
// result: true

pipe(
	input,
	D.lessTime(threshold),
); // true
