import { DGenerator, DNumber, equal } from "@duplojs/utils";

const divisor = 2;
const remainder = 0;
const input = [0, 1, 2, 3, 4, 5];

const result = DGenerator.asyncFilter(
	input,
	(value) => equal(DNumber.modulo(value, divisor), remainder),
);
// result: AsyncGenerator<number, unknown, unknown>
