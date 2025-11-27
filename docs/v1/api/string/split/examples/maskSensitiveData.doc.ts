import { DString, A, pipe } from "@duplojs/utils";

const creditCard = "1234-5678-9012-3456";
const result = pipe(
	creditCard,
	DString.split("-"),
	A.slice(0, -1),
	A.map(() => "****"),
	A.push(
		pipe(
			creditCard,
			DString.split("-"),
			A.last,
		),
	),
	A.join("-"),
);

// result: "****-****-****-3456"
