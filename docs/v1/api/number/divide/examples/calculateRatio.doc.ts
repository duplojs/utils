import { N, A, pipe, innerPipe } from "@duplojs/utils";

const sales = [
	{
		product: "Laptop",
		sold: 150,
		target: 200,
	},
	{
		product: "Mouse",
		sold: 450,
		target: 400,
	},
	{
		product: "Keyboard",
		sold: 300,
		target: 350,
	},
];

const result = pipe(
	sales,
	A.map(
		innerPipe(
			({ sold, target }) => pipe(
				sold,
				N.divide(target),
				N.multiply(100),
				N.round,
			),
			N.clamp(0, 150),
		),
	),
);

// result: [75, 112, 86]
