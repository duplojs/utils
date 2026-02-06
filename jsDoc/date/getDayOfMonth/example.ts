import { D, pipe } from "@scripts";

const input = D.create("2024-06-01", {
	hour: "00",
	minute: "30",
});
const utcDay = D.getDayOfMonth(input);
// utcDay: 1

const laDay = D.getDayOfMonth(input, "America/Los_Angeles");
// laDay: 31

pipe(
	input,
	(value) => D.getDayOfMonth(value, "UTC"),
); // 1
