import { D, pipe } from "@scripts";

const input = D.create("2024-06-30");
const result = D.subtractWeeks(input, 4);
// result: "date1716076800000+"

pipe(
	input,
	D.subtractWeeks(4),
); // result: "date1716076800000+"
