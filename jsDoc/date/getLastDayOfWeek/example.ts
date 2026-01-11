import { D, pipe } from "@scripts";

const input = D.create("2024-06-19");
const result = D.getLastDayOfWeek(input);
// result: "date1719187200000+" (Sunday 23 june 2024)

pipe(
	input,
	D.getLastDayOfWeek,
); // result: "date1719187200000+" (Sunday 23 june 2024)
