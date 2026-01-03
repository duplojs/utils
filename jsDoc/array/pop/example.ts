import { A } from "@scripts";

A.pop(
	[1, 2, 3],
); // [1, 2]

A.pop(
	<const>["alpha", "beta"],
); // ["alpha"]

A.pop(
	[],
); // []
