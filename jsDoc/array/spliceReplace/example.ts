import { A, pipe } from "@scripts";

A.spliceReplace(
	[1, 2, 3],
	1,
	[9, 8],
); // [1, 9, 8]

pipe(
	["alpha", "beta", "gamma"],
	A.spliceReplace(1, ["delta"]),
); // ["alpha", "delta", "gamma"]

A.spliceReplace(
	[1, 2],
	0,
	[3],
); // [3, 2]
