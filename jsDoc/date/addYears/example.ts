import { D, pipe } from "@scripts";

const input = D.create("2020-02-29");
const result = D.addYears(input, 4);
// result: TheDate

pipe(
	input,
	D.addYears(4),
); // TheDate
