import { G, N, equal, whenElse, pipe } from "@duplojs/utils";

const totalPages = 3;
const multiplier = 10;

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
			equal(totalPages),
			exit,
			async(pageIndex) => next(
				await Promise.resolve(
					pipe(
						pageIndex,
						N.add(1),
						N.multiply(multiplier),
					),
				),
			),
		),
	),
	G.asyncReduce(
		G.reduceFrom<number[]>([]),
		({ element, lastValue, next }) => next([...lastValue, element]),
	),
);
// result: [10, 20, 30]
