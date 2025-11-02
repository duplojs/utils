import { DGenerator, DNumber, equal, whenElse, pipe } from "@duplojs/utils";

const itemCount = 4;
const divisor = 2;
const remainder = 0;

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
			equal(itemCount),
			exit,
			async() => next(await Promise.resolve(count)),
		),
	),
	DGenerator.asyncReduce(
		DGenerator.reduceFrom<number[]>([]),
		({ element, lastValue, next }) => whenElse(
			DNumber.modulo(element, divisor),
			equal(remainder),
			() => next([...lastValue, element]),
			() => next(lastValue),
		),
	),
);
// result: [0, 2]
