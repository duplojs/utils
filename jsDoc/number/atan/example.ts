import { N, pipe } from "@scripts";

N.atan(0); // 0

pipe(
	0,
	N.atan,
); // 0

N.atan(1); // ~0.785

N.atan(-1); // ~-0.785
