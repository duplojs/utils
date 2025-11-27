import { N, A, pipe } from "@duplojs/utils";

const prices = [25, 50, 15, 60, 30, 50];
const budget = 50;

const result = pipe(
	prices,
	A.filter(
		N.less(budget),
	),
);

// result: [25, 50, 15, 30, 50]
