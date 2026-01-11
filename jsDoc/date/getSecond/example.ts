import { D, pipe } from "@scripts";

const input = D.create("2024-06-20");
const result = D.getSecond(input);
// result: 0

const result2 = D.getSecond(input, "Asia/Seoul");
// result2: 0

pipe(
	input,
	D.getSecond,
); // result: 0
