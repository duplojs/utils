import { N, A, pipe } from "@duplojs/utils";

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
	A.map((triangle) => ({
		sideBSquared: N.power(triangle.sideB, 2),
		sideCSquared: N.power(triangle.sideC, 2),
		sideASquared: N.power(triangle.sideA, 2),
		denominator: N.multiply(N.multiply(2, triangle.sideB), triangle.sideC),
	})),
	A.map(({ sideBSquared, sideCSquared, sideASquared, denominator }) => {
		// cos(A) = (b² + c² - a²) / (2bc)
		const cosAngleA = N.divide(
			N.subtract(
				N.add(sideBSquared, sideCSquared),
				sideASquared,
			),
			denominator,
		);

		return pipe(cosAngleA, N.acos, N.multiply(N.divide(180, Math.PI)));
	}),
);

// result: [90, 73.4, 60]
