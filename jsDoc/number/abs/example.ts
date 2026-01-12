import { N, pipe } from "@scripts";

N.abs(-5); // 5

pipe(
	-5,
	N.abs,
); // 5

N.abs(0); // 0

N.abs(3); // 3
