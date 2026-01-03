import { A, pipe } from "@scripts";

A.set(
	[1, 2, 3],
	1,
	9,
); // [1, 9, 3]

A.set(
	[1, 2, 3],
	-1,
	0,
); // [1, 2, 0]

pipe(
	["alpha", "beta"],
	A.set(0, "gamma"),
); // ["gamma", "beta"]
