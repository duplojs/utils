import { DArray, DString, pipe } from "@duplojs/utils";

const input = ["price: 100", "total: 250", "count: 42"];
const result = pipe(
	input,
	DArray.map(DString.match(/\d+/)),
	DArray.filter((value) => value !== undefined),
	DArray.map(DArray.first),
	DArray.filter((value) => value !== undefined),
);
// result: ["100", "250", "42"]
