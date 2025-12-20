import { G, N } from "@duplojs/utils";

const values = [10, 20, 30];

const result = await G.asyncReduce(
	values,
	G.reduceFrom(0),
	async({ element, lastValue, next }) => {
		const response = await fetch("https://api.example.com/tax");
		const { rate } = await response.json() as { rate: number };
		return next(N.add(lastValue, N.multiply(element, rate)));
	},
);
