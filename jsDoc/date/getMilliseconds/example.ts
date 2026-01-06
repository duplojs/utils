import { D, pipe } from "@scripts";

const input = D.create("2024-06-20", {
	hour: "12",
	minute: "34",
	second: "56",
	millisecond: "789",
});
const result = D.getMilliseconds(input);
// result: 789

pipe(
	input,
	D.getMilliseconds,
); // result: 789
