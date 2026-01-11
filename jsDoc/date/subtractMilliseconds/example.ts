import { D, pipe } from "@scripts";

const input = D.create("2024-06-20");
const result = D.subtractMilliseconds(input, 500);
// result: "date1718841599500+"

pipe(
	input,
	D.subtractMilliseconds(500),
); // result: "date1718841599500+"
