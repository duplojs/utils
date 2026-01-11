import { forwardLog, pipe } from "@scripts";

const input = {
	id: 42,
	name: "Neo",
};

const result = pipe(
	input,
	forwardLog,
	({ name }) => `Hello ${name}!`,
);

// logs: { id: 42, name: "Neo" }
// result: "Hello Neo!"
