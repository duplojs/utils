import { DArray, DString, innerPipe, pipe } from "@duplojs/utils";

const input = ["user@gmail.com", "admin@yahoo.com", "dev@gmail.com"] as const;
const result = pipe(
	input,
	DArray.filter(DString.includes("@gmail")),
	DArray.map(
		innerPipe(
			DString.split("@"),
			DArray.first,
		),
	),
);
// result: ["user", "dev"]
