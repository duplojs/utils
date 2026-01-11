import { G } from "@scripts";

const limit = 3;

const iterator = G.asyncLoop(async(
	{
		count,
		next,
		exit,
	}: G.GeneratorLoopParams<number>,
) => {
	if (count === limit) {
		return exit();
	}
	const response = await fetch(`https://api.example.com/pages/${count + 1}`);
	const { id: pageId } = await response.json() as { id: number };
	return next(pageId);
});

const result = await G.asyncReduce(
	iterator,
	G.reduceFrom<number[]>([]),
	({ element, lastValue, next }) => next([
		...lastValue,
		element,
	]),
);
