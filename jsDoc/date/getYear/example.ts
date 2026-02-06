import { D, pipe } from "@scripts";

const input = D.create("2024-12-31", {
	hour: "23",
	minute: "30",
});
const utcYear = D.getYear(input);
// utcYear: 2024

const tokyoYear = D.getYear(input, "Asia/Tokyo");
// tokyoYear: 2025

pipe(
	input,
	(value) => D.getYear(value, "UTC"),
); // 2024
