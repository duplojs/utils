import { G, N, equal } from "@duplojs/utils";

const divisor = 2;
const remainder = 0;
const input = [0, 1, 2, 3, 4, 5];

const result = G.asyncFilter(
	input,
	(value) => equal(N.modulo(value, divisor), remainder),
);
// result: AsyncGenerator<number, unknown, unknown>
