import { N, A, pipe } from "@duplojs/utils";

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
	A.map(({ width, height }) => N.multiply(width, height)),
	A.reduce(
		A.reduceFrom(0),
		({ element, lastValue, next }) => next(
			N.add(lastValue, element),
		),
	),
);

// result: 167
