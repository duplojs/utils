import { DGenerator, DNumber, equal, whenElse, pipe } from "@duplojs/utils";

const totalPages = 3;
const multiplier = 10;

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
			equal(totalPages),
			exit,
			async(pageIndex) => next(
				await Promise.resolve(
					pipe(
						pageIndex,
						DNumber.add(1),
						DNumber.multiply(multiplier),
					),
				),
			),
		),
	),
	DGenerator.asyncReduce(
		DGenerator.reduceFrom<number[]>([]),
		({ element, lastValue, next }) => next([...lastValue, element]),
	),
);
// result: [10, 20, 30]
