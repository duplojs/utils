import { N, pipe } from "@scripts";

N.betweenThan(
	5,
	0,
	10,
); // true

pipe(
	10,
	N.betweenThan(0, 10),
); // false

N.betweenThan(
	11,
	0,
	10,
); // false
