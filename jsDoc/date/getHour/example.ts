import { D, pipe } from "@scripts";

const input = D.create("2024-06-20");
const result = D.getHour(input);
// result: 0

const result2 = D.getHour(input, "America/Los_Angeles");
// result2: 17

pipe(
	input,
	D.getHour,
); // result: 0
