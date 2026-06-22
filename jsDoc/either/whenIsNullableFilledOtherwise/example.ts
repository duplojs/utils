import { E, pipe } from "@scripts";

const matched = E.whenIsNullableFilledOtherwise(
	"value" as const,
	(value) => value,
	() => "otherwise",
); // matching raw value

const fallback = E.whenIsNullableFilledOtherwise(
	null,
	(value) => value,
	(value) => value,
); // original raw input

const piped = pipe(
	"value" as const,
	E.whenIsNullableFilledOtherwise(
		(value) => value,
		() => "otherwise",
	),
); // matching raw value
