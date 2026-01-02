import { A, pipe } from "@scripts";

A.findAndSpliceReplace(
	[1, 2, 3, 4],
	(value) => value === 2,
	[9, 8],
); // [1, 9, 8, 4]

pipe(
	["alpha", "beta", "gamma"],
	A.findAndSpliceReplace(
		(value) => value === "beta",
		["delta"],
	),
); // ["alpha", "delta", "gamma"]

A.findAndSpliceReplace(
	[1, 2],
	(value) => value === 5,
	[0],
); // undefined
