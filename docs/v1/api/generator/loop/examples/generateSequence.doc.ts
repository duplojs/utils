import { G, N, equal, whenElse, pipe } from "@duplojs/utils";

const startValue = 1;
const endValue = 5;

const result = pipe(
	G.loop(
		(
			{
				count,
				next,
				exit,
			}: G.GeneratorLoopParams<number>,
		) => whenElse(
			count,
			equal(endValue),
			(value) => exit(N.add(startValue, value)),
			(value) => next(N.add(startValue, value)),
		),
	),
	G.reduce(
		G.reduceFrom<number[]>([]),
		({ element, lastValue, next }) => next([...lastValue, element]),
	),
);
// result: [1, 2, 3, 4, 5]
