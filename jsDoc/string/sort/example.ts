import { S, pipe } from "@scripts";

S.sort(
	[
		"zeta",
		"alpha",
		"beta",
	],
	"ASC",
); // ["alpha", "beta", "zeta"]

pipe(
	[
		"zeta",
		"alpha",
	],
	S.sort("DSC"),
); // ["zeta", "alpha"]

S.sort(
	[
		"beta",
		"alpha",
	],
	"ASC",
); // ["alpha", "beta"]
