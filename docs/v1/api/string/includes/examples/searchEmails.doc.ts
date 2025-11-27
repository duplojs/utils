import { A, DString, innerPipe, pipe } from "@duplojs/utils";

const input = ["user@gmail.com", "admin@yahoo.com", "dev@gmail.com"] as const;
const result = pipe(
	input,
	A.filter(DString.includes("@gmail")),
	A.map(
		innerPipe(
			DString.split("@"),
			A.first,
		),
	),
);
// result: ["user", "dev"]
