import { DNumber, DArray, pipe } from "@duplojs/utils";

interface Point {
	xPosition: number;
	yPosition: number;
}

interface Movement {
	from: Point;
	to: Point;
	label: string;
}

const degreesToRadians = 180;

const movements: Movement[] = [
	{
		from: {
			xPosition: 0,
			yPosition: 0,
		},
		to: {
			xPosition: 10,
			yPosition: 0,
		},
		label: "East",
	},
	{
		from: {
			xPosition: 0,
			yPosition: 0,
		},
		to: {
			xPosition: 0,
			yPosition: 10,
		},
		label: "North",
	},
	{
		from: {
			xPosition: 0,
			yPosition: 0,
		},
		to: {
			xPosition: -10,
			yPosition: 0,
		},
		label: "West",
	},
	{
		from: {
			xPosition: 0,
			yPosition: 0,
		},
		to: {
			xPosition: 0,
			yPosition: -10,
		},
		label: "South",
	},
	{
		from: {
			xPosition: 5,
			yPosition: 5,
		},
		to: {
			xPosition: 15,
			yPosition: 15,
		},
		label: "North-East",
	},
];

const result = pipe(
	movements,
	DArray.map((movement) => ({
		label: movement.label,
		deltaX: DNumber.subtract(movement.to.xPosition, movement.from.xPosition),
		deltaY: DNumber.subtract(movement.to.yPosition, movement.from.yPosition),
	})),
	DArray.map(({ label, deltaX, deltaY }) => ({
		direction: label,
		angle: pipe(
			DNumber.atan2(deltaY, deltaX),
			DNumber.multiply(degreesToRadians),
			DNumber.divide(Math.PI),
		),
	})),
);

// result: [
//   { direction: "East", angle: 0 },
//   { direction: "North", angle: 90 },
//   { direction: "West", angle: 180 },
//   { direction: "South", angle: -90 },
//   { direction: "North-East", angle: 45 }
// ]
