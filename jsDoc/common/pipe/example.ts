import { pipe } from "@scripts";

const input = {
	price: 10,
	quantity: 3,
};
const tvaRate = 1.2;
const digit = 2;

const result = pipe(
	input,
	({ price, quantity }) => price * quantity,
	(value) => value * tvaRate,
	(value) => `${value.toFixed(digit)}€`,
);
// result: "36€"
