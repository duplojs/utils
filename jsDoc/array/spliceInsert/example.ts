import { A, pipe } from "@scripts";

A.spliceInsert(
	[1, 2, 3],
	1,
	[9],
); // [1, 9, 2, 3]

pipe(
	["alpha", "beta"],
	A.spliceInsert(0, ["start"]),
); // ["start", "alpha", "beta"]

A.spliceInsert(
	[1, 2],
	2,
	[3],
); // [1, 2, 3]
