import { type ExpectType, G } from "@duplojs/utils";

const result = G.flat(
	[
		[1, 2],
		[3, 4],
	],
);

type check = ExpectType<
	typeof result,
	Generator<number, void, unknown>,
	"strict"
>;

const deepResult = G.flat(
	[
		[[1], [2]],
		[[3], [4]],
	],
	2,
);
