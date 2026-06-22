import { E, pipe } from "@scripts";

const matched = E.whenIsBoolTruthyOtherwise(
	"value" as const,
	(value) => value,
	() => "otherwise",
); // matching raw value

const fallback = E.whenIsBoolTruthyOtherwise(
	"" as const,
	(value) => value,
	(value) => value,
); // original raw input

const piped = pipe(
	"value" as const,
	E.whenIsBoolTruthyOtherwise(
		(value) => value,
		() => "otherwise",
	),
); // matching raw value
