import { G, pipe } from "@scripts";

G.concat([1, 2], [3], [4]); // Generator<1 | 2 | 3 | 4, unknown, unknown>

pipe(
	[1, 2, 3],
	G.concat(<number[]>[4, 5]),
); // Generator<number, unknown, unknown>
