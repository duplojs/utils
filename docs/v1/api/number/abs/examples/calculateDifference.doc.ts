import { N, A, pipe, innerPipe } from "@duplojs/utils";

const prices = [100, 150, 80, 120];
const target = 110;

const result = pipe(
	prices,
	A.map(
		innerPipe(
			N.subtract(target),
			N.abs,
		),
	),
);

// result: [10, 40, 30, 10]
