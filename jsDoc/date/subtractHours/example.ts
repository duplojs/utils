import { D, pipe } from "@scripts";

const input = D.create("2024-06-20");
const result = D.subtractHours(input, 6);
// result: "date1718820000000+"

pipe(
	input,
	D.subtractHours(6),
); // result: "date1718820000000+"
