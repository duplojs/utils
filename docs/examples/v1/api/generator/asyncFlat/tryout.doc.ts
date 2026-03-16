import { type ExpectType, G } from "@duplojs/utils";

async function *values() {
	yield Promise.resolve([1, 2]);
	yield [3, 4];
}

const result = G.asyncFlat(values());

type check = ExpectType<
	typeof result,
	AsyncGenerator<number, void, unknown>,
	"strict"
>;

const deepResult = G.asyncFlat(
	[
		[[1], [2]],
		[[3], [4]],
	],
	2,
);
