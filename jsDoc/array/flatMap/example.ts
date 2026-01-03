import { A, pipe } from "@scripts";

A.flatMap(
	[1, 2],
	(value) => [value, value],
); // [1, 1, 2, 2]

pipe(
	["alpha", "beta"],
	A.flatMap((value) => [value.length]),
); // [5, 4]

A.flatMap(
	[1, 2, 3],
	(value, { index }) => [index, value],
); // [0, 1, 1, 2, 2, 3]
