import { N, pipe } from "@scripts";

N.add(10, 5); // 15

pipe(
	10,
	N.add(5),
); // 15

N.add(-3, 8); // 5
