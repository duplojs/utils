import { S, pipe } from "@scripts";

S.sortCompare("alpha", "beta"); // -1

pipe(
	"beta",
	S.sortCompare("alpha"),
); // 1

[
	"beta",
	"alpha",
	"gamma",
].sort((left, right) => S.sortCompare(left, right)); // ["alpha", "beta", "gamma"]
