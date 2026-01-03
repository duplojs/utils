import { A } from "@scripts";

A.flat(
	[[1], [2]],
); // [1, 2]

A.flat(
	[1, [2, [3]]],
	2,
); // [1, 2, 3]

A.flat(
	[],
); // []
