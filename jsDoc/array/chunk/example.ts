import { A, pipe } from "@scripts";

A.chunk([1, 2, 3, 4, 5], 2);
// [[1, 2], [3, 4], [5]]

pipe(
	["alpha", "beta", "gamma", "delta", "epsilon"],
	A.chunk(3),
); // [["alpha", "beta", "gamma"], ["delta", "epsilon"]]
