import { D, pipe, when } from "@scripts";

const input = "time2000+";
const threshold = "time1500+";

const result = D.greaterTime(input, threshold);
// result: true

if (D.greaterTime(input, threshold)) {
	// input is greater or equal
}

const result2 = pipe(
	input,
	when(
		D.greaterTime(threshold),
		() => "ok",
	),
);
// result2: "ok"
