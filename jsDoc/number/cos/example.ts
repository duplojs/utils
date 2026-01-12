import { N, pipe } from "@scripts";

N.cos(0); // 1

pipe(
	0,
	N.cos,
); // 1

N.cos(Math.PI / 2); // ~0

N.cos(Math.PI); // -1
