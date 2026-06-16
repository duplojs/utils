import { A, pipe } from "@scripts";

A.fill(
	[10, 20, 30, 40],
	0,
	1,
	3,
); // [10, 0, 0, 40]

const input = ["alpha", "beta", "gamma"];
pipe(
	input,
	A.fill("delta", 0, 2),
); // ["delta", "delta", "gamma"]
