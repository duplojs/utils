import { DNumber, DArray, pipe, innerPipe } from "@duplojs/utils";

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
	DArray.map((triangle) => DNumber.divide(triangle.height, triangle.hypotenuse)),
	DArray.map(
		innerPipe(
			DNumber.asin,
			DNumber.multiply(DNumber.divide(180, Math.PI)),
		),
	),
);

// result: [36.87, 30, 30]
