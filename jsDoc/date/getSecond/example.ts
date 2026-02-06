import { D, pipe } from "@scripts";

const input = D.create("2024-06-20", {
	hour: "00",
	minute: "00",
	second: "45",
});
const utcSecond = D.getSecond(input);
// utcSecond: 45

const londonSecond = D.getSecond(input, "Europe/London");
// londonSecond: 45

pipe(
	input,
	(value) => D.getSecond(value, "UTC"),
); // 45
