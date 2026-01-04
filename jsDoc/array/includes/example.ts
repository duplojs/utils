import { A, pipe, when } from "@scripts";

const numbersList = [1, 2, 3];

if (A.includes(numbersList, 4)) {
	// numbersList contains "4"
} else {
	// numbersList not contains "4"
}

pipe(
	["alpha", "beta"],
	when(
		A.includes("beta"),
		(value) => {
			// value contains "beta"
		},
	),
);
