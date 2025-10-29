import { DNumber, DArray, pipe } from "@duplojs/utils";

const rectangles = [
	{
		width: 5,
		height: 10,
	},
	{
		width: 8,
		height: 12,
	},
	{
		width: 3,
		height: 7,
	},
];

const result = pipe(
	rectangles,
	DArray.map(({ width, height }) => DNumber.multiply(width, height)),
	DArray.reduce(
		DArray.reduceFrom(0),
		({ element, lastValue, next }) => next(
			DNumber.add(lastValue, element),
		),
	),
);

// result: 167
