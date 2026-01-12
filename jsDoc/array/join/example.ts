import { A, pipe } from "@scripts";

A.join(
	["alpha", "beta"],
	"-",
); // "alpha-beta"

pipe(
	["a", "b", "c"],
	A.join(""),
); // "abc"

A.join(
	<const>["x", "y"],
	":",
); // "x:y"
