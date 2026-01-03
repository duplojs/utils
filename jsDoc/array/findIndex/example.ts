import { A, pipe } from "@scripts";

A.findIndex(
	[1, 2, 3],
	(value) => value > 1,
); // 1

pipe(
	["alpha", "beta"],
	A.findIndex((value) => value === "beta"),
); // 1

A.findIndex(
	[1, 2],
	(value) => value === 5,
); // undefined
