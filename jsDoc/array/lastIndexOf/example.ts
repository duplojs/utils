import { A, pipe } from "@scripts";

A.lastIndexOf(
	[1, 2, 1],
	1,
); // 2

A.lastIndexOf(
	[1, 2, 1],
	1,
	1,
); // 0

pipe(
	["alpha", "beta"],
	A.lastIndexOf("gamma"),
); // undefined
