import { DGenerator, DNumber, equal, whenElse, pipe } from "@duplojs/utils";

const startValue = 1;
const endValue = 5;

const result = pipe(
	DGenerator.loop(
		(
			{
				count,
				next,
				exit,
			}: DGenerator.GeneratorLoopParams<number>,
		) => whenElse(
			count,
			equal(endValue),
			(value) => exit(DNumber.add(startValue, value)),
			(value) => next(DNumber.add(startValue, value)),
		),
	),
	DGenerator.reduce(
		DGenerator.reduceFrom<number[]>([]),
		({ element, lastValue, next }) => next([...lastValue, element]),
	),
);
// result: [1, 2, 3, 4, 5]
