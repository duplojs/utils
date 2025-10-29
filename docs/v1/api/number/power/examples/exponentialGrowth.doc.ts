import { DNumber, DArray, pipe, innerPipe } from "@duplojs/utils";

const initialValue = 1000;
const growthRate = 1.05;
const years = [1, 2, 3, 4, 5];

const result = pipe(
	years,
	DArray.map(
		innerPipe(
			DNumber.power(growthRate),
			DNumber.multiply(initialValue),
			Math.round,
		),
	),
);

// result: [1050, 1103, 1158, 1216, 1276]
