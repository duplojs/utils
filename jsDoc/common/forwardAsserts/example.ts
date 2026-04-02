import { forwardAsserts, isType, pipe } from "@scripts";

const input = "demo" as string | number;
const result = forwardAsserts(input, isType("string"));

const pipedResult = pipe(
	"admin" as string | number,
	forwardAsserts(isType("string")),
);
