import { A, pipe } from "@scripts";

A.insert(
	4,
	[1, 2, 3],
); // [1, 2, 3, 4]

pipe(
	"gamma",
	A.insert(<string[]>["alpha", "beta"]),
); // ["alpha", "beta", "gamma"]

A.insert(true, [false]); // [false, true]
