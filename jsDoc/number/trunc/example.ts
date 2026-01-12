import { N, pipe } from "@scripts";

N.trunc(1.9); // 1

pipe(
	1.9,
	N.trunc,
); // 1

N.trunc(-1.9); // -1

N.trunc(2.0); // 2
