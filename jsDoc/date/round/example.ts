import { D, pipe } from "@scripts";

const input = D.create("2024-06-20", {
	hour: "12",
	minute: "34",
	second: "56",
	millisecond: "789",
});

const byDay = D.round(input);
// byDay: TheDate

const byMonth = D.round(input, "month");
// byMonth: TheDate

pipe(
	input,
	D.round,
); // TheDate
