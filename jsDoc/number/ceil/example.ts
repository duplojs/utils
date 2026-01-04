import { N, pipe } from "@scripts";

N.ceil(1.2); // 2

pipe(
	1.2,
	N.ceil,
); // 2

N.ceil(2.0); // 2

N.ceil(-1.2); // -1
