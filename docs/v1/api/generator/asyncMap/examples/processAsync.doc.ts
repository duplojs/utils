import { DGenerator, DNumber, equal, whenElse, pipe } from "@duplojs/utils";

const itemCount = 3;
const baseId = 100;

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
	DGenerator.asyncMap(async(value) => Promise.resolve(
		pipe(value, DNumber.add(baseId)),
	)),
	DGenerator.asyncReduce(
		DGenerator.reduceFrom<number[]>([]),
		({ element, lastValue, next }) => next([...lastValue, element]),
	),
);
// result: [100, 101, 102]
