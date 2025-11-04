import { DNumber, DArray, pipe } from "@duplojs/utils";

// Formule: cos(θ) = (A·B) / (|A||B|)
interface Vector2D {
	xPosition: number;
	yPosition: number;
}

const vectorPairs: [Vector2D, Vector2D][] = [
	[
		{
			xPosition: 1,
			yPosition: 0,
		},
		{
			xPosition: 0,
			yPosition: 1,
		},
	],
	[
		{
			xPosition: 1,
			yPosition: 1,
		},
		{
			xPosition: 1,
			yPosition: 0,
		},
	],
	[
		{
			xPosition: 1,
			yPosition: 0,
		},
		{
			xPosition: -1,
			yPosition: 0,
		},
	],
];

const result = pipe(
	vectorPairs,
	DArray.map(([vector1, vector2]) => ({
		dotProduct: DNumber.add(
			DNumber.multiply(vector1.xPosition, vector2.xPosition),
			DNumber.multiply(vector1.yPosition, vector2.yPosition),
		),
		magnitude1: pipe(
			DNumber.add(
				DNumber.power(vector1.xPosition, 2),
				DNumber.power(vector1.yPosition, 2),
			),
			DNumber.power(0.5),
		),
		magnitude2: pipe(
			DNumber.add(
				DNumber.power(vector2.xPosition, 2),
				DNumber.power(vector2.yPosition, 2),
			),
			DNumber.power(0.5),
		),
	})),
	DArray.map(
		({ dotProduct, magnitude1, magnitude2 }) => pipe(
			DNumber.divide(dotProduct, DNumber.multiply(magnitude1, magnitude2)),
			DNumber.acos,
			DNumber.multiply(DNumber.divide(180, Math.PI)),
		),
	),
);

// result: [90, 45, 180]
