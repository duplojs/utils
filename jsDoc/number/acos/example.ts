import { N, pipe } from "@scripts";

N.acos(1); // 0

pipe(
	1,
	N.acos,
); // 0

N.acos(0); // ~1.571

N.acos(-1); // ~3.142
