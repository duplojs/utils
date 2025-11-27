import { A, DString, pipe } from "@duplojs/utils";

const input = "price: 100€, total: 250€, discount: 50€";
const result = pipe(
	input,
	DString.matchAll(/(\d+)€/g),
	A.from,
	A.map(A.last),
	A.filter((value) => value !== undefined),
);
// result: ["100", "250", "50"]
