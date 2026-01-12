import { N, pipe } from "@scripts";

N.sin(0); // 0

pipe(
	0,
	N.sin,
); // 0

N.sin(Math.PI / 2); // 1

N.sin(Math.PI); // ~0
