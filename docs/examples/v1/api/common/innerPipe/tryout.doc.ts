import { A, innerPipe, N, pipe, S } from "@duplojs/utils";

const tvaRate = 1.2;
const digit = 2;
const input = [10, 15, 23, 30.4];

const result = pipe(
	input,
	A.map(
		innerPipe(
			N.multiply(tvaRate),
			N.toFixed(digit),
			S.concat("€"),
		),
	),
);
// result ["12€", "18€", "27.6€", "36.48€"]
