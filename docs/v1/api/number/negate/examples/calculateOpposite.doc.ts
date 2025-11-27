import { N, A, pipe, whenElse, equal, createEnum } from "@duplojs/utils";

const directionEnum = createEnum(["up", "down"]);

const movements = [
	{
		direction: directionEnum.up,
		distance: 10,
	},
	{
		direction: directionEnum.down,
		distance: 5,
	},
	{
		direction: directionEnum.up,
		distance: 8,
	},
];

const result = pipe(
	movements,
	A.map((move) => whenElse(
		move.direction,
		equal(directionEnum.down),
		() => N.negate(move.distance),
		() => move.distance,
	)),
	A.reduce(
		A.reduceFrom(0),
		({ element, lastValue, next }) => next(N.add(lastValue, element)),
	),
);

// result: 13
