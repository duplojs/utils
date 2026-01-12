import { A } from "@scripts";

A.reverse(
	[1, 2, 3],
); // [3, 2, 1]

A.reverse(
	<const>["alpha", "beta"],
); // ["beta", "alpha"]

A.reverse(
	[],
); // []
