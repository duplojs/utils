import { N, pipe } from "@scripts";

N.round(1.4); // 1

pipe(
	1.4,
	N.round,
); // 1

N.round(1.5); // 2

N.round(-1.6); // -2
