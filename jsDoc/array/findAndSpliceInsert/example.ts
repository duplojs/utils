import { A, pipe } from "@scripts";

A.findAndSpliceInsert(
	[1, 2, 3],
	(value) => value === 2,
	[9],
); // [1, 9, 2, 3]

const input = ["alpha", "beta"];
pipe(
	input,
	A.findAndSpliceInsert((value) => value === "alpha", ["start"]),
); // ["start", "alpha", "beta"]

A.findAndSpliceInsert(
	[1, 2],
	(value) => value === 5,
	[0],
); // undefined
