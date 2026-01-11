import { D, pipe } from "@scripts";

const input = D.create("2024-06-19");
const result = D.getFirstDayOfMonth(input);
// result: "date1717200000000+" (1 June 2024)

pipe(
	input,
	D.getFirstDayOfMonth,
); // result: "date1717200000000+" (1 June 2024)
