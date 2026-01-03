import { A, pipe } from "@scripts";

A.spliceDelete(
	[1, 2, 3, 4],
	1,
	2,
); // [1, 4]

pipe(
	["alpha", "beta", "gamma"],
	A.spliceDelete(0, 1),
); // ["beta", "gamma"]
