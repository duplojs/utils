import { D, pipe } from "@scripts";

const input = D.create("2024-01-04");
const result = D.getWeekOfYear(input, "Europe/Berlin");
// result: 1

pipe(
	input,
	(value) => D.getWeekOfYear(value, "Europe/Berlin"),
); // result: 1
