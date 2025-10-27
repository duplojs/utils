import { DString, DArray, pipe } from "@duplojs/utils";

const creditCard = "1234-5678-9012-3456";
const result = pipe(
	creditCard,
	DString.split("-"),
	DArray.slice(0, -1),
	DArray.map(() => "****"),
	DArray.push(
		pipe(
			creditCard,
			DString.split("-"),
			DArray.last,
		),
	),
	DArray.join("-"),
);

// result: "****-****-****-3456"
