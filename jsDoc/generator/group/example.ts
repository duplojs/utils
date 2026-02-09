import { G, pipe } from "@scripts";

G.group(
	[1, 2, 3, 4],
	(value, { output }) => output(value % 2 ? "odd" : "even", value),
);
// { odd: [1, 3], even: [2, 4] }

pipe(
	new Set(["alpha", "beta", "gamma"]),
	G.group((value, { index, output }) => output(
		"entry",
		{
			index,
			value,
		},
	)),
);
// { entry: [{ index: 0, value: "alpha" }, ...] }

G.group(
	["apple", "pear", "plum"],
	(value, { output }) => output(
		value.startsWith("p") ? "startsWithP" : "other",
		value.length,
	),
);
// { startsWithP: [5, 4, 4] }
