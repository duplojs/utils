import { G, pipe } from "@scripts";

const ids = [1, 2, 3];

const result = await pipe(
	ids,
	G.asyncMap(async(itemId) => {
		const response = await fetch(`https://api.example.com/items/${itemId}`);
		const { price } = await response.json() as { price: number };
		return price;
	}),
	G.asyncReduce(
		G.reduceFrom<number[]>([]),
		({ element, lastValue, next }) => next([
			...lastValue,
			element,
		]),
	),
);
