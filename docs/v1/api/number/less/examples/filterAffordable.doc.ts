import { DNumber, DArray, pipe } from "@duplojs/utils";

const prices = [25, 50, 15, 60, 30, 50];
const budget = 50;

const result = pipe(
	prices,
	DArray.filter(
		DNumber.less(budget),
	),
);

// result: [25, 50, 15, 30, 50]
