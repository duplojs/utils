import { D, pipe } from "@scripts";

const input = D.create("2024-06-20");
const result = D.subtractDays(input, 3);
// result: "date1718582400000+"

pipe(
	input,
	D.subtractDays(3),
); // result: "date1718582400000+"
