import { DNumber, DArray, pipe } from "@duplojs/utils";

interface Triangle {
	sideA: number;
	sideB: number;
	sideC: number;
}

const triangles: Triangle[] = [
	{
		sideA: 5,
		sideB: 4,
		sideC: 3,
	},
	{
		sideA: 7,
		sideB: 8,
		sideC: 9,
	},
	{
		sideA: 6,
		sideB: 6,
		sideC: 6,
	},
];

const result = pipe(
	triangles,
	DArray.map((triangle) => ({
		sideBSquared: DNumber.power(triangle.sideB, 2),
		sideCSquared: DNumber.power(triangle.sideC, 2),
		sideASquared: DNumber.power(triangle.sideA, 2),
		denominator: DNumber.multiply(DNumber.multiply(2, triangle.sideB), triangle.sideC),
	})),
	DArray.map(({ sideBSquared, sideCSquared, sideASquared, denominator }) => {
		// cos(A) = (b² + c² - a²) / (2bc)
		const cosAngleA = DNumber.divide(
			DNumber.subtract(
				DNumber.add(sideBSquared, sideCSquared),
				sideASquared,
			),
			denominator,
		);

		return pipe(cosAngleA, DNumber.acos, DNumber.multiply(DNumber.divide(180, Math.PI)));
	}),
);

// result: [90, 73.4, 60]
