import { N, pipe } from "@scripts";

N.min([1, 5, 2]); // 1

pipe(
	<const>[-1, -3],
	N.min,
); // -3

N.min([0]); // 0
