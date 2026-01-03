import { A, pipe } from "@scripts";

A.findAndSpliceDelete(
	[1, 2, 3, 4],
	(value) => value === 2,
	2,
); // [1, 4]

pipe(
	["alpha", "beta", "gamma"],
	A.findAndSpliceDelete((value) => value === "beta", 1),
); // ["alpha", "gamma"]

A.findAndSpliceDelete(
	[1, 2],
	(value) => value === 5,
	1,
); // undefined
