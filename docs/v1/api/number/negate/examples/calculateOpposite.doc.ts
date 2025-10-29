import { DNumber, DArray, pipe, whenElse, equal, createEnum } from "@duplojs/utils";

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
	DArray.map((move) => whenElse(
		move.direction,
		equal(directionEnum.down),
		() => DNumber.negate(move.distance),
		() => move.distance,
	)),
	DArray.reduce(
		DArray.reduceFrom(0),
		({ element, lastValue, next }) => next(DNumber.add(lastValue, element)),
	),
);

// result: 13
