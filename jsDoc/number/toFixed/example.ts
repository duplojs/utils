import { N, pipe } from "@scripts";

N.toFixed(
	3.1415,
	2,
); // "3.14"

pipe(
	3.1415,
	N.toFixed(1),
); // "3.1"

N.toFixed(
	10,
	0,
); // "10"
