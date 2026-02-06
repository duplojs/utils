import { D, pipe } from "@scripts";

const input = D.create("2024-12-31", {
	hour: "23",
	minute: "30",
});
const utcDayOfYear = D.getDayOfYear(input);
// utcDayOfYear: 366

const sydneyDayOfYear = D.getDayOfYear(input, "Australia/Sydney");
// sydneyDayOfYear: 1

pipe(
	input,
	(value) => D.getDayOfYear(value, "UTC"),
); // 366
