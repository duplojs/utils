import { A, pipe } from "@scripts";

A.findLastIndex(
	[1, 2, 3, 2],
	(value) => value === 2,
); // 3

pipe(
	["alpha", "beta", "beta"],
	A.findLastIndex((value) => value === "beta"),
); // 2

A.findLastIndex(
	[1, 2],
	(value) => value === 5,
); // undefined
