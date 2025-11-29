import { N, A, pipe, innerPipe } from "@duplojs/utils";

interface Triangle {
	height: number;
	hypotenuse: number;
}

const triangles: Triangle[] = [
	{
		height: 3,
		hypotenuse: 5,
	},
	{
		height: 1,
		hypotenuse: 2,
	},
	{
		height: 5,
		hypotenuse: 10,
	},
];

const result = pipe(
	triangles,
	A.map((triangle) => N.divide(triangle.height, triangle.hypotenuse)),
	A.map(
		innerPipe(
			N.asin,
			N.multiply(N.divide(180, Math.PI)),
		),
	),
);

// result: [36.87, 30, 30]
