import { D, pipe } from "@scripts";

const input = D.create("2024-01-31");
const result = D.addMonths(input, 1);
// result: "date1709251200000+" (29 february 2024)

const addQuarter = D.addMonths(3);
const result2 = addQuarter(input);
// result2: "date1719782400000+" (30 april 2024)

pipe(
	input,
	D.addMonths(1),
); // result: "date1709251200000+" (29 february 2024)
