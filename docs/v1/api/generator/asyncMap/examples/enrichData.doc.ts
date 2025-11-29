import { G, N, pipe } from "@duplojs/utils";

const basePrice = 100;
const priceMultiplier = 10;
const input = [0, 1, 2];

const result = await pipe(
	input,
	G.asyncMap(async(itemId, { index }) => ({
		id: pipe(itemId, N.add(1)),
		price: await Promise.resolve(
			pipe(
				index,
				N.add(1),
				N.multiply(priceMultiplier),
				N.add(basePrice),
			),
		),
	})),
	G.asyncReduce(
		G.reduceFrom<{
			id: number;
			price: number;
		}[]>([]),
		({ element, lastValue, next }) => next([...lastValue, element]),
	),
);
// result: [{ id: 1, price: 110 }, { id: 2, price: 120 }, { id: 3, price: 130 }]
