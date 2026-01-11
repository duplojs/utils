import { A } from "@scripts";

A.shift(
	[1, 2, 3],
); // [2, 3]

A.shift(
	<const>["alpha", "beta"],
); // ["beta"]

A.shift(
	[],
); // []
