import { D, pipe } from "@scripts";

const input = D.create("2024-06-20", {
	hour: "00",
	minute: "30",
});
const utcMinute = D.getMinute(input);
// utcMinute: 30

const tokyoMinute = D.getMinute(input, "Asia/Tokyo");
// tokyoMinute: 30

pipe(
	input,
	(value) => D.getMinute(value, "UTC"),
); // 30
