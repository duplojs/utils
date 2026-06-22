import { E, pipe } from "@scripts";

const matched = E.whenIsBoolFalsyOtherwise(
	"" as const,
	(value) => value,
	() => "otherwise",
); // matching raw value

const fallback = E.whenIsBoolFalsyOtherwise(
	"value" as const,
	(value) => value,
	(value) => value,
); // original raw input

const piped = pipe(
	"" as const,
	E.whenIsBoolFalsyOtherwise(
		(value) => value,
		() => "otherwise",
	),
); // matching raw value
