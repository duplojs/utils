import { A, pipe } from "@scripts";

pipe(
	[10, 20, 30, 40],
	A.at(2),
); // 30

A.at(<const>[10, 20, 30, 40], 2); // 30
A.at(<const>[10, 20, 30, 40], -1); // 40
A.at(<const>[10, 20, 30], 10); // undefined
