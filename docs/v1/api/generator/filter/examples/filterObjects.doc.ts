import { DGenerator, DNumber, pipe } from "@duplojs/utils";

const minStock = 10;
const input = [
	{
		name: "laptop",
		stock: 5,
	},
	{
		name: "mouse",
		stock: 15,
	},
	{
		name: "keyboard",
		stock: 8,
	},
	{
		name: "monitor",
		stock: 20,
	},
];

const result = pipe(
	input,
	DGenerator.filter((product) => DNumber.greaterThan(product.stock, minStock)),
	DGenerator.reduce(
		DGenerator.reduceFrom<typeof input>([]),
		({ element, lastValue, next }) => next([...lastValue, element]),
	),
);
// result: [{ name: "mouse", stock: 15 }, { name: "monitor", stock: 20 }]
