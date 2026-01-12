import { N, pipe } from "@scripts";

N.asin(0); // 0

pipe(
	0,
	N.asin,
); // 0

N.asin(1); // ~1.571

N.asin(-1); // ~-1.571
