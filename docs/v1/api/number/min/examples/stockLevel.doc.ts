import { DNumber, DArray, pipe } from "@duplojs/utils";

const warehouses = [
	{
		location: "Paris",
		productAStock: 150,
		productBStock: 200,
	},
	{
		location: "Lyon",
		productAStock: 85,
		productBStock: 120,
	},
	{
		location: "Marseille",
		productAStock: 120,
		productBStock: 90,
	},
	{
		location: "Toulouse",
		productAStock: 45,
		productBStock: 180,
	},
];

const result = pipe(
	warehouses,
	DArray.reduce(
		DArray.reduceFrom({
			minProductA: Infinity,
			minProductB: Infinity,
		}),
		({ element, lastValue, next }) => next({
			minProductA: DNumber.min(element.productAStock, lastValue.minProductA),
			minProductB: DNumber.min(element.productBStock, lastValue.minProductB),
		}),
	),
);

// result: { minProductA: 45, minProductB: 90 }
