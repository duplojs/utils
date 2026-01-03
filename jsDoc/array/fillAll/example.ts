import { A, pipe } from "@scripts";

A.fillAll(
	[1, 2, 3],
	0,
); // [0, 0, 0]

pipe(
	["alpha", "beta"],
	A.fillAll("gamma"),
); // ["gamma", "gamma"]

A.fillAll(
	[],
	true,
); // []
