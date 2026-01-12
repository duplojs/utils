import { D, pipe } from "@scripts";

const input = D.create("2024-06-20", {
	hour: "12",
	minute: "34",
	second: "56",
	millisecond: "789",
});
const result = D.round(input);
// result: "date1718841600000+"

const result2 = D.round(input, "month");
// result2: "date1717200000000+"

pipe(
	input,
	D.round,
); // result: "date1718841600000+"
