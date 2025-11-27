import { N, A, pipe } from "@duplojs/utils";

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
	A.map(([vector1, vector2]) => ({
		dotProduct: N.add(
			N.multiply(vector1.xPosition, vector2.xPosition),
			N.multiply(vector1.yPosition, vector2.yPosition),
		),
		magnitude1: pipe(
			N.add(
				N.power(vector1.xPosition, 2),
				N.power(vector1.yPosition, 2),
			),
			N.power(0.5),
		),
		magnitude2: pipe(
			N.add(
				N.power(vector2.xPosition, 2),
				N.power(vector2.yPosition, 2),
			),
			N.power(0.5),
		),
	})),
	A.map(
		({ dotProduct, magnitude1, magnitude2 }) => pipe(
			N.divide(dotProduct, N.multiply(magnitude1, magnitude2)),
			N.acos,
			N.multiply(N.divide(180, Math.PI)),
		),
	),
);

// result: [90, 45, 180]
