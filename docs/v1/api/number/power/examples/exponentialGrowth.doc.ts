import { N, A, pipe, innerPipe } from "@duplojs/utils";

const initialValue = 1000;
const growthRate = 1.05;
const years = [1, 2, 3, 4, 5];

const result = pipe(
	years,
	A.map(
		innerPipe(
			N.power(growthRate),
			N.multiply(initialValue),
			Math.round,
		),
	),
);

// result: [1050, 1103, 1158, 1216, 1276]
