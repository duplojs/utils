import { D, pipe } from "@scripts";

const input = D.create("2024-06-20");
const result = D.addHours(input, 2);
// result: "date1718848800000+"

pipe(
	input,
	D.addHours(2),
); // result: "date1718848800000+"
