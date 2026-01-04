import { A, pipe, when } from "@scripts";

A.minElements(
	[1],
	2,
); // false

const valuesList = [
	1,
	2,
];

if (A.minElements(valuesList, 2)) {
	// valuesList has at least 2 items
}

pipe(
	valuesList,
	when(
		A.minElements(2),
		(items) => {
			// items has at least 2 items
		},
	),
);
