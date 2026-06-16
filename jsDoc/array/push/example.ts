import { A, pipe } from "@scripts";

A.push(
	[1, 2],
	3,
); // [1, 2, 3]

A.push(
	[1, 2],
	3,
	4,
); // [1, 2, 3, 4]

const input = ["alpha", "beta"];
pipe(
	input,
	A.push("gamma"),
); // ["alpha", "beta", "gamma"]
