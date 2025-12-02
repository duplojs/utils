import { N, pipe, S } from "@duplojs/utils";

const input = {
	price: 10,
	quantity: 3,
};
const tvaRate = 1.2;
const digit = 2;

const result = pipe(
	input,
	({ price, quantity }) => N.multiply(price, quantity),
	N.multiply(tvaRate),
	N.toFixed(digit),
	S.concat("€"),
);
// result: "36€"
