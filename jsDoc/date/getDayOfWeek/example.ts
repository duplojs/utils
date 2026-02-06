import { D, pipe } from "@scripts";

const input = D.create("2024-06-17");
const utcWeekday = D.getDayOfWeek(input);
// utcWeekday: 1

const tokyoWeekday = D.getDayOfWeek(input, "Asia/Tokyo");
// tokyoWeekday: 1

pipe(
	input,
	D.getDayOfWeek,
); // 1
