import { A, pipe } from "@scripts";

A.findAndReplace([1, 2, 3], (value) => value === 2, 9); // [1, 9, 3]

pipe(
	["alpha", "beta"],
	A.findAndReplace((value) => value === "beta", "gamma"),
); // ["alpha", "gamma"]

A.findAndReplace([1, 2], (value) => value === 5, 0); // undefined
