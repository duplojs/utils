import { DNumber, DArray, pipe } from "@duplojs/utils";

const prices = [100, 250, 50, 180];
const taxRate = 1.2;

const result = pipe(
	prices,
	DArray.map(DNumber.multiply(taxRate)),
);

// result: [120, 300, 60, 216]
