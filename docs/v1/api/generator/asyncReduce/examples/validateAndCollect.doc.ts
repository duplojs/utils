import { G, N, equal, whenElse, pipe } from "@duplojs/utils";

const itemCount = 4;
const divisor = 2;
const remainder = 0;

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
			async() => next(await Promise.resolve(count)),
		),
	),
	G.asyncReduce(
		G.reduceFrom<number[]>([]),
		({ element, lastValue, next }) => whenElse(
			N.modulo(element, divisor),
			equal(remainder),
			() => next([...lastValue, element]),
			() => next(lastValue),
		),
	),
);
// result: [0, 2]
