import { type ExpectType, G } from "@duplojs/utils";

async function *tail() {
	yield 3;
	yield Promise.resolve(4);
}

const result = G.asyncConcat(
	[1, 2],
	tail(),
);

type check = ExpectType<
	typeof result,
	AsyncGenerator<number, unknown, unknown>,
	"strict"
>;

