import { G } from "@scripts";

const oneLevel = G.flat([[1, 2], [3, 4]]);
// Generator<number, void, unknown>

const twoLevels = G.flat(
	[[[1], [2]], [[3], [4]]],
	2,
);
// Generator<number, void, unknown>

const keepLastLevel = G.flat(
	[[[1], [2]], [[3], [4]]],
	1,
);
// Generator<number[], void, unknown>
