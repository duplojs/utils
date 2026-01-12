import { N, pipe } from "@scripts";

N.tan(0); // 0

pipe(
	0,
	N.tan,
); // 0

N.tan(Math.PI / 4); // 1

N.tan(1); // ~1.557
