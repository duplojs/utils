import { DGenerator, equal, whenElse, pipe } from "@duplojs/utils";

const maxCount = 3;

const result = await pipe(
	DGenerator.asyncLoop(
		async(
			{
				count,
				next,
				exit,
			}: DGenerator.GeneratorLoopParams<number>,
		) => whenElse(
			count,
			equal(maxCount),
			exit,
			async() => next(await Promise.resolve(count)),
		),
	),
	DGenerator.asyncReduce(
		DGenerator.reduceFrom<number[]>([]),
		({ element, lastValue, next }) => next([...lastValue, element]),
	),
);
// result: [0, 1, 2]
