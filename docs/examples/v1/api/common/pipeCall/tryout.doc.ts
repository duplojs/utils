import { isType, pipe, pipeCall, when } from "@duplojs/utils";

//function without generic
const upper = (value: string) => value.toUpperCase();

const bugResult = pipe(
	//@ts-expect-error inference bug
	"text" as string | number,
	when(
		isType("string"),
		upper,
	),
);

const result = pipe(
	"text" as string | number,
	when(
		isType("string"),
		// pipeCall prevents `upper` from forcing the pipe input inference.
		pipeCall(upper),
	),
);
