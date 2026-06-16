import { A, pipe } from "@scripts";

A.lastIndexOf(
	[1, 2, 1],
	1,
); // 2

A.lastIndexOf(
	[1, 2, 1],
	1,
	1,
); // 0

const input = ["alpha", "beta"];
pipe(
	input,
	A.lastIndexOf("gamma"),
); // undefined
