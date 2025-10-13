import { DArray, DString, pipe } from "@duplojs/utils";

const input = "price: 100€, total: 250€, discount: 50€";
const result = pipe(
	input,
	DString.matchAll(/(\d+)€/g),
	DArray.from,
	DArray.map(DArray.last),
	DArray.filter((value) => value !== undefined),
);
// result: ["100", "250", "50"]
