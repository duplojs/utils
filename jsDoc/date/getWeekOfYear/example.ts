import { D, pipe } from "@scripts";

const input = D.create("2024-01-04");
const utcWeek = D.getWeekOfYear(input);
// utcWeek: 1

const berlinWeek = D.getWeekOfYear(input, "Europe/Berlin");
// berlinWeek: 1

pipe(
	input,
	(value) => D.getWeekOfYear(value, "UTC"),
); // 1
