import { DGenerator, equal, whenElse } from "@duplojs/utils";

const maxValue = 5;
const result = DGenerator.loop(
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
);
// result: Generator<number, unknown, unknown>
