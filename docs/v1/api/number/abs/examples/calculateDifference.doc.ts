import { DNumber, DArray, pipe, innerPipe } from "@duplojs/utils";

const prices = [100, 150, 80, 120];
const target = 110;

const result = pipe(
	prices,
	DArray.map(
		innerPipe(
			DNumber.subtract(target),
			DNumber.abs,
		),
	),
);

// result: [10, 40, 30, 10]
