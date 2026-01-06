import { D, pipe } from "@scripts";

const input = D.create("2024-06-20");
const result = D.subtractMinutes(input, 15);
// result: "date1718840700000+"

pipe(
	input,
	D.subtractMinutes(15),
); // result: "date1718840700000+"
