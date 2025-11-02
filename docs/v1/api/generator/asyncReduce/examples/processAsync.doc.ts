import { DGenerator, DNumber, whenElse, pipe, forward, equal } from "@duplojs/utils";

const itemCount = 3;
const baseDuration = 100;
const durationIncrement = 50;

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
			forward(async(index) => next(
				await Promise.resolve(
					pipe(
						index,
						DNumber.multiply(durationIncrement),
						DNumber.add(baseDuration),
					),
				),
			)),
		),
	),
	DGenerator.asyncReduce(
		DGenerator.reduceFrom({
			completed: 0,
			totalTime: 0,
		}),
		({ element, lastValue, next }) => next(
			{
				completed: DNumber.add(lastValue.completed, 1),
				totalTime: DNumber.add(lastValue.totalTime, element),
			},
		),
	),
);
// result: { completed: 3, totalTime: 450 }
