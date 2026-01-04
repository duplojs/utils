import { N, pipe } from "@scripts";

N.negate(5); // -5

pipe(
	-3,
	N.negate,
); // 3

N.negate(0); // 0
