import { A, DString, pipe } from "@duplojs/utils";

const input = ["price: 100", "total: 250", "count: 42"];
const result = pipe(
	input,
	A.map(DString.match(/\d+/)),
	A.filter((value) => value !== undefined),
	A.map(A.first),
	A.filter((value) => value !== undefined),
);
// result: ["100", "250", "42"]
