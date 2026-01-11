import { D, pipe, when } from "@scripts";

const input = "time1500+";
const greater = "time1000+";
const less = "time2000+";

const result = D.betweenThanTime(input, greater, less);
// result: true

if (D.betweenThanTime(input, greater, less)) {
	// input is strictly within bounds
}

const result2 = pipe(
	input,
	when(
		D.betweenThanTime(greater, less),
		() => "ok",
	),
);
// result2: "ok"
