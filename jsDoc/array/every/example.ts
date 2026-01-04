import { A, pipe, when } from "@scripts";

A.every(
	[1, 2, 3],
	(value, { index }) => value > 0 && (index + 1) === value,
); // true

pipe(
	["alpha", "beta"],
	when(
		A.every((value) => value.length > 3),
		(items) => {
			// items all match the predicate
		},
	),
);
