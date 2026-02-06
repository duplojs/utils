import { D, pipe } from "@scripts";

const input = D.create("2024-06-20", {
	hour: "00",
});
const utcHour = D.getHour(input);
// utcHour: 0

const laHour = D.getHour(input, "America/Los_Angeles");
// laHour: 17

pipe(
	input,
	(value) => D.getHour(value, "UTC"),
); // 0
