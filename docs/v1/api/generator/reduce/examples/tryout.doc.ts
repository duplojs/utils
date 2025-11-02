import { DGenerator, DNumber, equal, whenElse, pipe } from "@duplojs/utils";

const maxValue = 5;
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
			equal(maxValue),
			exit,
			next,
		),
	),
	DGenerator.reduce(
		DGenerator.reduceFrom(0),
		({ element, lastValue, next }) => next(DNumber.add(lastValue, element)),
	),
);
// result: 10
