import { G, equal, whenElse, pipe } from "@duplojs/utils";

const maxCount = 3;

const result = await pipe(
	G.asyncLoop(
		async(
			{
				count,
				next,
				exit,
			}: G.GeneratorLoopParams<number>,
		) => whenElse(
			count,
			equal(maxCount),
			exit,
			async() => next(await Promise.resolve(count)),
		),
	),
	G.asyncReduce(
		G.reduceFrom<number[]>([]),
		({ element, lastValue, next }) => next([...lastValue, element]),
	),
);
// result: [0, 1, 2]
