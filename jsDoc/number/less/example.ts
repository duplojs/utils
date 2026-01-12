import { N, pipe } from "@scripts";

N.less(
	10,
	10,
); // true

pipe(
	9,
	N.less(10),
); // true

N.less(
	11,
	10,
); // false
