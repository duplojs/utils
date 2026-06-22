import { E, pipe } from "@scripts";

const matched = E.whenIsNullishFilledOtherwise(
	"value" as const,
	(value) => value,
	() => "otherwise",
); // matching raw value

const fallback = E.whenIsNullishFilledOtherwise(
	undefined,
	(value) => value,
	(value) => value,
); // original raw input

const piped = pipe(
	"value" as const,
	E.whenIsNullishFilledOtherwise(
		(value) => value,
		() => "otherwise",
	),
); // matching raw value
