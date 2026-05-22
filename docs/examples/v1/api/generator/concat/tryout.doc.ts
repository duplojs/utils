import { type ExpectType, G } from "@duplojs/utils";

const result = G.concat(
	[1, 2],
	[3],
	[4, 5],
);

type check = ExpectType<
	typeof result,
	Generator<1 | 2 | 3 | 4 | 5, unknown, unknown>,
	"strict"
>;
