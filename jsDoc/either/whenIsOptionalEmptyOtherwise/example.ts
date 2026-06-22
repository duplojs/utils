import { E, pipe } from "@scripts";

const matched = E.whenIsOptionalEmptyOtherwise(
	undefined,
	(value) => value,
	() => "otherwise",
); // matching raw value

const fallback = E.whenIsOptionalEmptyOtherwise(
	"value" as const,
	(value) => value,
	(value) => value,
); // original raw input

const piped = pipe(
	undefined,
	E.whenIsOptionalEmptyOtherwise(
		(value) => value,
		() => "otherwise",
	),
); // matching raw value
