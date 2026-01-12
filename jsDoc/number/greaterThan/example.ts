import { N, pipe } from "@scripts";

N.greaterThan(
	10,
	10,
); // false

pipe(
	11,
	N.greaterThan(10),
); // true

N.greaterThan(
	9,
	10,
); // false
