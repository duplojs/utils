import { D, pipe, when } from "@scripts";

const input = "time1500+";
const greater = "time1000+";
const less = "time2000+";

const result = D.betweenTime(input, greater, less);
// result: true

if (D.betweenTime(input, greater, less)) {
	// input is within bounds
}

const result2 = pipe(
	input,
	when(
		D.betweenTime(greater, less),
		() => "ok",
	),
);
// result2: "ok"
