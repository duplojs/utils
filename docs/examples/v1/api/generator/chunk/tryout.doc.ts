import { type ExpectType, G, N } from "@duplojs/utils";

const input = G.loop(
	({ count, next, exit }: G.GeneratorLoopParams<number>) => N.greater(count, 7)
		? exit()
		: next(count),
);

const result = G.chunk(input, 3);

type check = ExpectType<
	typeof result,
	Generator<number[], unknown, unknown>,
	"strict"
>;

