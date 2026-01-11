import { N, pipe } from "@scripts";

N.clamp(
	5,
	0,
	10,
); // 5

pipe(
	20,
	N.clamp(0, 10),
); // 10

N.clamp(
	-5,
	0,
	10,
); // 0
