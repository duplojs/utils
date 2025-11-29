import { G, N, whenElse, pipe, forward, equal } from "@duplojs/utils";

const itemCount = 3;
const baseDuration = 100;
const durationIncrement = 50;

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
			forward(async(index) => next(
				await Promise.resolve(
					pipe(
						index,
						N.multiply(durationIncrement),
						N.add(baseDuration),
					),
				),
			)),
		),
	),
	G.asyncReduce(
		G.reduceFrom({
			completed: 0,
			totalTime: 0,
		}),
		({ element, lastValue, next }) => next(
			{
				completed: N.add(lastValue.completed, 1),
				totalTime: N.add(lastValue.totalTime, element),
			},
		),
	),
);
// result: { completed: 3, totalTime: 450 }
