import { G, N, equal, whenElse, pipe } from "@duplojs/utils";

const maxValue = 5;
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
			equal(maxValue),
			exit,
			next,
		),
	),
	G.reduce(
		G.reduceFrom(0),
		({ element, lastValue, next }) => next(N.add(lastValue, element)),
	),
);
// result: 10
