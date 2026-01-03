import { A, pipe, when } from "@scripts";

A.some(
	[1, 2, 3],
	(value) => value > 2,
); // true

A.some(
	["alpha", "beta"],
	(value) => value === "gamma",
); // false

pipe(
	[1, 2, 3],
	when(
		A.some((value) => value > 2),
		(items) => {
			// items has at least one match
		},
	),
);
