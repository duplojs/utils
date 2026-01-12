import { N, pipe } from "@scripts";

N.power(
	2,
	3,
); // 8

pipe(
	3,
	N.power(2),
); // 9

N.power(
	9,
	0,
); // 1
