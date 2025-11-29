import { G, N, pipe, equal } from "@duplojs/utils";

const input = [0, 1, 2, 3, 4, 5, 6, 7];
const divisor = 2;
const remainder = 0;

pipe(
	input,
	G.filter((value) => equal(N.modulo(value, divisor), remainder)),
	G.map(N.multiply(divisor)),
	G.execute,
);
// result: void
