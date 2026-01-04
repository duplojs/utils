import { N, pipe } from "@scripts";

N.subtract(
	10,
	3,
); // 7

pipe(
	10,
	N.subtract(2),
); // 8

N.subtract(
	5,
	8,
); // -3
