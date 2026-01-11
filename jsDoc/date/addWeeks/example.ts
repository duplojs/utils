import { D, pipe } from "@scripts";

const input = D.create("2024-06-03");
const result = D.addWeeks(input, 2);
// result: "date1718841600000+"

pipe(
	input,
	D.addWeeks(2),
); // result: "date1718841600000+"
