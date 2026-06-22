import { E, pipe } from "@scripts";

const matched = E.whenIsOptionalFilledOtherwise(
	"value" as const,
	(value) => value,
	() => "otherwise",
); // matching raw value

const fallback = E.whenIsOptionalFilledOtherwise(
	undefined,
	(value) => value,
	(value) => value,
); // original raw input

const piped = pipe(
	"value" as const,
	E.whenIsOptionalFilledOtherwise(
		(value) => value,
		() => "otherwise",
	),
); // matching raw value
