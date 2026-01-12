import { D, pipe } from "@scripts";

const input = D.create("2024-06-19");
const result = D.getFirstDayOfWeek(input);
// result: "date1718668800000+" (monday 17 june 2024)

pipe(
	input,
	D.getFirstDayOfWeek,
); // result: "date1718668800000+" (monday 17 june 2024)
