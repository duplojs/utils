import { A } from "@scripts";

A.from(
	"ab",
); // ["a", "b"]

A.from(
	new Set([1, 2]),
); // [1, 2]

A.from(
	{
		0: "alpha",
		1: "beta",
		length: 2,
	},
); // ["alpha", "beta"]
