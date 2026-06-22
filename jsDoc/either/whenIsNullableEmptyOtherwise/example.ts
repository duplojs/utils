import { E, pipe } from "@scripts";

const matched = E.whenIsNullableEmptyOtherwise(
	null,
	(value) => value,
	() => "otherwise",
); // matching raw value

const fallback = E.whenIsNullableEmptyOtherwise(
	"value" as const,
	(value) => value,
	(value) => value,
); // original raw input

const piped = pipe(
	null,
	E.whenIsNullableEmptyOtherwise(
		(value) => value,
		() => "otherwise",
	),
); // matching raw value
