import { D, pipe } from "@scripts";

const input = D.create("2024-06-19");
const result = D.getLastDayOfMonth(input);
// result: "date1719532800000+" (30 June 2024)

pipe(
	input,
	D.getLastDayOfMonth,
); // result: "date1719532800000+" (30 June 2024)
