import { DNumber, DArray, pipe, innerPipe } from "@duplojs/utils";

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
	DArray.map(
		innerPipe(
			({ sold, target }) => pipe(
				sold,
				DNumber.divide(target),
				DNumber.multiply(100),
				DNumber.round,
			),
			DNumber.clamp(0, 150),
		),
	),
);

// result: [75, 112, 86] (pourcentages des objectifs atteints, plafonnés à 150%)
