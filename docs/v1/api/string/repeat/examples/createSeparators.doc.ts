import { DArray, DNumber, DString, pipe } from "@duplojs/utils";

const input = [1, 2, 3];
const result = pipe(
	input,
	DArray.map(
		(value) => DString.repeat(
			"=",
			DNumber.multiply(value, 5),
		),
	),
);
// result: ["=====", "==========", "==============="]
