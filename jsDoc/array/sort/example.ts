import { A, pipe } from "@scripts";

A.sort(
	[3, 1, 2],
	(first, second) => first - second,
); // [1, 2, 3]

pipe(
	["beta", "alpha"],
	A.sort((first, second) => first.localeCompare(second)),
); // ["alpha", "beta"]
