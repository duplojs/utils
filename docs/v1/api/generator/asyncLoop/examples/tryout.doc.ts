import { DGenerator, equal, whenElse } from "@duplojs/utils";

const maxCount = 3;
const result = DGenerator.asyncLoop(
	async(
		{
			count,
			next,
			exit,
		}: DGenerator.GeneratorLoopParams<number>,
	) => whenElse(
		count,
		equal(maxCount),
		exit,
		async() => next(await Promise.resolve(count)),
	),
);
// result: AsyncGenerator<number, unknown, unknown>
