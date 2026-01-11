import { N, pipe } from "@scripts";

N.lessThan(
	10,
	10,
); // false

pipe(
	9,
	N.lessThan(10),
); // true

N.lessThan(
	11,
	10,
); // false
