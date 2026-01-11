import { D, pipe } from "@scripts";

const input = D.create("2024-06-20");
const result = D.subtractSeconds(input, 30);
// result: "date1718841570000+"

pipe(
	input,
	D.subtractSeconds(30),
); // result: "date1718841570000+"
