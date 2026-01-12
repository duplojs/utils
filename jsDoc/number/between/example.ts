import { N, pipe } from "@scripts";

N.between(
	5,
	0,
	10,
); // true

pipe(
	10,
	N.between(0, 10),
); // true

N.between(
	11,
	0,
	10,
); // false
