import { G, equal, whenElse } from "@duplojs/utils";

const maxCount = 3;
const result = G.asyncLoop(
	async(
		{
			count,
			next,
			exit,
		}: G.GeneratorLoopParams<number>,
	) => whenElse(
		count,
		equal(maxCount),
		exit,
		async() => next(await Promise.resolve(count)),
	),
);
// result: AsyncGenerator<number, unknown, unknown>
