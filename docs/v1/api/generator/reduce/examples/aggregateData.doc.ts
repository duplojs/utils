import { G, N, pipe } from "@duplojs/utils";

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
	G.reduce(
		G.reduceFrom({
			total: 0,
			count: 0,
		}),
		({ element, lastValue, nextWithObject }) => nextWithObject(
			lastValue,
			{
				total: N.add(
					lastValue.total,
					(element as {
						id: number;
						amount: number;
					}).amount,
				),
				count: N.add(lastValue.count, 1),
			},
		),
	),
);
// result: { total: 575, count: 4 }
