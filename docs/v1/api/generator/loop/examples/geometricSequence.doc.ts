import { G, N, equal, whenElse, pipe } from "@duplojs/utils";

const maxCount = 5;
const initialValue = 1;
const multiplier = 2;

const result = pipe(
	G.loop(
		(
			{
				count,
				previousOutput,
				next,
				exit,
			}: G.GeneratorLoopParams<number>,
		) => whenElse(
			count,
			equal(maxCount),
			() => exit(),
			(index) => whenElse(
				index,
				equal(0),
				() => next(initialValue),
				() => next(N.multiply(previousOutput!, multiplier)),
			),
		),
	),
	G.reduce(
		G.reduceFrom<number[]>([]),
		({ element, lastValue, next }) => next([...lastValue, element]),
	),
);
// result: [1, 2, 4, 8, 16]
