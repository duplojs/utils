import { N, A, pipe } from "@duplojs/utils";

const prices = [100, 250, 50, 180];
const taxRate = 1.2;

const result = pipe(
	prices,
	A.map(N.multiply(taxRate)),
);

// result: [120, 300, 60, 216]
