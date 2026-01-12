import { N, pipe } from "@scripts";

N.greater(
	10,
	10,
); // true

pipe(
	9,
	N.greater(10),
); // false

N.greater(
	9,
	10,
); // true
