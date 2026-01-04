import { N, pipe } from "@scripts";

N.sqrt(9); // 3

pipe(
	9,
	N.sqrt,
); // 3

N.sqrt(2); // ~1.414

N.sqrt(0); // 0
