import { G, N, equal, whenElse, pipe } from "@duplojs/utils";

const itemCount = 3;
const baseId = 100;

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
			equal(itemCount),
			exit,
			async() => next(await Promise.resolve(count)),
		),
	),
	G.asyncMap(async(value) => Promise.resolve(
		pipe(value, N.add(baseId)),
	)),
	G.asyncReduce(
		G.reduceFrom<number[]>([]),
		({ element, lastValue, next }) => next([...lastValue, element]),
	),
);
// result: [100, 101, 102]
