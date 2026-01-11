import { D, pipe, when } from "@scripts";

const input = "time2000+";
const threshold = "time1500+";

const result = D.greaterThanTime(input, threshold);
// result: true

if (D.greaterThanTime(input, threshold)) {
	// input is strictly greater
}

const result2 = pipe(
	input,
	when(
		D.greaterThanTime(threshold),
		() => "ok",
	),
);
// result2: "ok"
