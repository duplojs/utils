import { D, pipe, when } from "@scripts";

const input = "time1000+";
const threshold = "time1500+";

const result = D.lessTime(input, threshold);
// result: true

if (D.lessTime(input, threshold)) {
	// input is less or equal
}

const result2 = pipe(
	input,
	when(
		D.lessTime(threshold),
		() => "ok",
	),
);
// result2: "ok"
