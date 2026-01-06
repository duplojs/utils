import { D, pipe } from "@scripts";

const input = D.create("2024-06-15");
const result = D.addDays(input, 5);
// result: "date1718928000000+"

pipe(
	input,
	D.addDays(5),
); // result: "date1718928000000+"
