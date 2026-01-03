import { A, pipe, when } from "@scripts";

A.lengthEqual(
	[1, 2, 3],
	2,
); // false

const numbersList = [1, 2];

if (A.lengthEqual(numbersList, 2)) {
	// numbersList has length 2
}

pipe(
	numbersList,
	when(
		A.lengthEqual(2),
		(items) => {
			// items has length 2
		},
	),
);
