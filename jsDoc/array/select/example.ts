import { A, pipe } from "@scripts";

A.select(
	[1, 2, 3],
	({ element, select }) => select(element * 2),
); // [2, 4, 6]

A.select(
	[1, 2, 3],
	({ element, skip, select }) => element > 1 ? select(element) : skip(),
); // [2, 3]

pipe(
	["alpha", "beta"],
	A.select(({ index, select }) => select(index)),
); // [0, 1]
