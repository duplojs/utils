import { D, pipe } from "@scripts";

const input = D.create("2024-06-20");
const result = D.subtractYears(input, 1);
// result: "date1687219200000+"

pipe(
	input,
	D.subtractYears(1),
); // result: "date1687219200000+"
