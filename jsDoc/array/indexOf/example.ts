import { A, pipe } from "@scripts";

A.indexOf(
	[1, 2, 3],
	2,
); // 1

A.indexOf(
	[1, 2, 3],
	2,
	2,
); // undefined

pipe(
	["alpha", "beta"],
	A.indexOf("beta"),
); // 1
