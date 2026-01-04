import { N, pipe } from "@scripts";

N.divide(
	10,
	2,
); // 5

pipe(
	9,
	N.divide(3),
); // 3

N.divide(
	5,
	2,
); // 2.5
