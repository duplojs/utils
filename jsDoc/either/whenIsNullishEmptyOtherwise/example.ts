import { E, pipe } from "@scripts";

const matched = E.whenIsNullishEmptyOtherwise(
	undefined,
	(value) => value,
	() => "otherwise",
); // matching raw value

const fallback = E.whenIsNullishEmptyOtherwise(
	"value" as const,
	(value) => value,
	(value) => value,
); // original raw input

const piped = pipe(
	undefined,
	E.whenIsNullishEmptyOtherwise(
		(value) => value,
		() => "otherwise",
	),
); // matching raw value
