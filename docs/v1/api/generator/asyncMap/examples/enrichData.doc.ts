import { DGenerator, DNumber, pipe } from "@duplojs/utils";

const basePrice = 100;
const priceMultiplier = 10;
const input = [0, 1, 2];

const result = await pipe(
	input,
	DGenerator.asyncMap(async(itemId, { index }) => ({
		id: pipe(itemId, DNumber.add(1)),
		price: await Promise.resolve(
			pipe(
				index,
				DNumber.add(1),
				DNumber.multiply(priceMultiplier),
				DNumber.add(basePrice),
			),
		),
	})),
	DGenerator.asyncReduce(
		DGenerator.reduceFrom<{
			id: number;
			price: number;
		}[]>([]),
		({ element, lastValue, next }) => next([...lastValue, element]),
	),
);
// result: [{ id: 1, price: 110 }, { id: 2, price: 120 }, { id: 3, price: 130 }]
