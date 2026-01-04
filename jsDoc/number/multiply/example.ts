import { N, pipe } from "@scripts";

N.multiply(
	3,
	4,
); // 12

pipe(
	3,
	N.multiply(2),
); // 6

N.multiply(
	-2,
	5,
); // -10
