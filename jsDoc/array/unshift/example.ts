import { A, pipe } from "@scripts";

A.unshift(
	[2, 3],
	1,
); // [1, 2, 3]

A.unshift(
	[3, 4],
	1,
	2,
); // [1, 2, 3, 4]

pipe(
	["beta", "gamma"],
	A.unshift("alpha"),
); // ["alpha", "beta", "gamma"]
