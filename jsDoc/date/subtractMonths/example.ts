import { D, pipe } from "@scripts";

const input = D.create("2024-06-30");
const result = D.subtractMonths(input, 2);
// result: "date1711843200000+"

pipe(
	input,
	D.subtractMonths(2),
); // result: "date1711843200000+"
