import { A, pipe } from "@scripts";

A.slice(
	[1, 2, 3, 4],
	1,
	3,
); // [2, 3]

pipe(
	["alpha", "beta", "gamma"],
	A.slice(1),
); // ["beta", "gamma"]

A.slice(
	[1, 2, 3],
	-2,
); // [2, 3]
