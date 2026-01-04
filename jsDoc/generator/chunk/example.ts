import { type ExpectType, G, N } from "@scripts";

const input = G.loop(
	({ count, next, exit }: G.GeneratorLoopParams<number>) => N.greater(count, 7)
		? exit()
		: next(count),
);

const result = G.chunk(input, 3);
// Generator<number[], unknown, unknown>
