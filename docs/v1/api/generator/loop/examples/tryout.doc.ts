import { G, equal, whenElse } from "@duplojs/utils";

const maxValue = 5;
const result = G.loop(
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
);
// result: Generator<number, unknown, unknown>
