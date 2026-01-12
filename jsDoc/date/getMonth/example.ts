import { D, pipe } from "@scripts";

const input = D.create("2024-12-31");
const result = D.getMonth(input);
// result: 12

const result2 = D.getMonth(input, "Asia/Tokyo");
// result2: 12

pipe(
	input,
	D.getMonth,
); // result: 12
