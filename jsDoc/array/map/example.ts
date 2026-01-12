import { A, pipe } from "@scripts";

A.map(
	[1, 2, 3],
	(value) => value * 2,
); // [2, 4, 6]

pipe(
	["alpha", "beta"],
	A.map((value, { index }) => `${index}:${value}`),
); // ["0:alpha", "1:beta"]
