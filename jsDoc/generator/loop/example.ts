import { G, pipe } from "@scripts";

const limit = 4;

const result = pipe(
	G.loop(({ count, next, exit }: G.GeneratorLoopParams<number>) => {
		if (count > limit) {
			return exit();
		}
		return next(count * 2);
	}),
	G.reduce(
		G.reduceFrom<number[]>([]),
		({ element, lastValue, next }) => next([
			...lastValue,
			element,
		]),
	),
);
