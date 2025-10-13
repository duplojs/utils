import { DArray, DString, innerPipe, pipe } from "@duplojs/utils";

const input = ["user@email.com", "invalid-email", "admin@site.org"];
const result = pipe(
	input,
	DArray.filter(
		innerPipe(
			DString.match(/@/),
			(value) => value !== undefined,
		),
	),
);
// result: ["user@email.com", "admin@site.org"]
