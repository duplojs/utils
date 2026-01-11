import { D, pipe } from "@scripts";

const input = D.create("2024-06-01");
const result = D.getDayOfMonth(input);
// result: 1

const result2 = D.getDayOfMonth(input, "America/New_York");
// result2: 1

pipe(
	input,
	D.getDayOfMonth,
); // result: 1
