import { N, pipe } from "@scripts";

N.floor(1.9); // 1

pipe(
	1.9,
	N.floor,
); // 1

N.floor(2.0); // 2

N.floor(-1.2); // -2
