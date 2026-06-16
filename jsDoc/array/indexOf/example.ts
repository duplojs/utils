import { A, pipe } from "@scripts";

A.indexOf(
	[1, 2, 3],
	2,
); // 1

A.indexOf(
	[1, 2, 3],
	2,
	2,
); // undefined

const input = ["alpha", "beta"];
pipe(
	input,
	A.indexOf("beta"),
); // 1
