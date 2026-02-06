import { D, pipe } from "@scripts";

const input = D.createTime(90, "minute");
const greater = D.createTime(1, "hour");
const less = D.createTime(2, "hour");

const result = D.betweenTime(input, greater, less);
// result: true

pipe(
	input,
	D.betweenTime(greater, less),
); // true
