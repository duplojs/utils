import { D, pipe } from "@scripts";

const input = D.create("2024-01-31");
const result = D.addMonths(input, 1);
// result: TheDate

pipe(
	input,
	D.addMonths(1),
); // TheDate
