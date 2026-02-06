import { D, pipe } from "@scripts";

const input = D.create("2024-12-31", {
	hour: "23",
	minute: "30",
});
const utcMonth = D.getMonth(input);
// utcMonth: 12

const tokyoMonth = D.getMonth(input, "Asia/Tokyo");
// tokyoMonth: 1

pipe(
	input,
	(value) => D.getMonth(value, "UTC"),
); // 12
