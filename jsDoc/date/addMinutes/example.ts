import { D, pipe } from "@scripts";

const input = D.create("2024-06-20");
const result = D.addMinutes(input, 45);
// result: "date1718844300000+"

pipe(
	input,
	D.addMinutes(45),
); // result: "date1718844300000+"
