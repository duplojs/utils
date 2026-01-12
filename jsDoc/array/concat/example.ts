import { A, pipe } from "@scripts";

A.concat(["alpha"], ["beta"], ["gamma"]); // ["alpha", "beta", "gamma"]

pipe(
	["x"],
	A.concat(["y", "z"]),
); // ["x", "y", "z"]
