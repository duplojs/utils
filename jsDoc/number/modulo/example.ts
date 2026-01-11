import { N, pipe } from "@scripts";

N.modulo(
	10,
	3,
); // 1

pipe(
	10,
	N.modulo(4),
); // 2

N.modulo(
	7,
	2,
); // 1
