import { DGenerator, DNumber, pipe } from "@duplojs/utils";

const orders = [
	{
		id: 1,
		amount: 100,
	},
	{
		id: 2,
		amount: 250,
	},
	{
		id: 3,
		amount: 75,
	},
	{
		id: 4,
		amount: 150,
	},
];

const result = pipe(
	orders,
	DGenerator.reduce(
		DGenerator.reduceFrom({
			total: 0,
			count: 0,
		}),
		({ element, lastValue, nextWithObject }) => nextWithObject(
			lastValue,
			{
				total: DNumber.add(
					lastValue.total,
					(element as {
						id: number;
						amount: number;
					}).amount,
				),
				count: DNumber.add(lastValue.count, 1),
			},
		),
	),
);
// result: { total: 575, count: 4 }
