import { D, pipe } from "@scripts";

const input = D.create("2024-06-20");
const result = D.addMilliseconds(input, 10);
// result: "date1718841600010+"

pipe(
	input,
	D.addMilliseconds(10),
); // result: "date1718841600010+"
