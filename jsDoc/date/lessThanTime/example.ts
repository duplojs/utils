import { D, pipe, when } from "@scripts";

const input = "time1000+";
const threshold = "time1500+";

const result = D.lessThanTime(input, threshold);
// result: true

if (D.lessThanTime(input, threshold)) {
	// input is strictly less
}

const result2 = pipe(
	input,
	when(
		D.lessThanTime(threshold),
		() => "ok",
	),
);
// result2: "ok"
