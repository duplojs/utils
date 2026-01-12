import { N, pipe } from "@scripts";

N.max([1, 5, 2]); // 5

pipe(
	<const>[-1, -3],
	N.max,
); // -1

N.max([0]); // 0
