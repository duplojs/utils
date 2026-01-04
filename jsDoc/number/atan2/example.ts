import { N, pipe } from "@scripts";

N.atan2(0, 1); // 0

pipe(
	1,
	N.atan2(1),
); // ~0.785

N.atan2(1, 0); // ~1.571
