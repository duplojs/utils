import { D, pipe } from "@scripts";

const input = D.create("2024-12-31");
const result = D.getDayOfYear(input, "Australia/Sydney");
// result: 366

pipe(
	input,
	(value) => D.getDayOfYear(value, "Australia/Sydney"),
); // result: 366
