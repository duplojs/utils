import { DGenerator, DNumber, pipe, equal } from "@duplojs/utils";

const input = [0, 1, 2, 3, 4, 5, 6, 7];
const divisor = 2;
const remainder = 0;

pipe(
	input,
	DGenerator.filter((value) => equal(DNumber.modulo(value, divisor), remainder)),
	DGenerator.map(DNumber.multiply(divisor)),
	DGenerator.execute,
);
// result: void
