import { A, pipe } from "@scripts";

A.copyWithin([1, 2, 3, 4], 0, 2); // [3, 4, 3, 4]

A.copyWithin([1, 2, 3, 4], 1, 0, 2); // [1, 1, 2, 4]

pipe(
	["alpha", "beta", "gamma"],
	A.copyWithin(1, 0, 2),
); // ["alpha", "alpha", "beta"]
