import { D, pipe } from "@scripts";

const input = D.createTime(2, "hour");
const greater = D.createTime(1, "hour");
const less = D.createTime(2, "hour");

const result = D.betweenThanTime(input, greater, less);
// result: false

pipe(
	input,
	D.betweenThanTime(greater, less),
); // false
