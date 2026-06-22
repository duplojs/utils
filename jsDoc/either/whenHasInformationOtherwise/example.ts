import { E, pipe } from "@scripts";

const matched = E.whenHasInformationOtherwise(
	true
		? E.right("success", 42)
		: E.left("failure", "error"),
	"success",
	(value) => value,
	() => 0,
); // 42

const fallback = E.whenHasInformationOtherwise(
	false
		? E.right("success", 42)
		: E.left("failure", "error"),
	"success",
	(value) => value,
	(value) => value,
); // E.Left<"failure", "error">

const piped = pipe(
	true
		? E.right("success", 42)
		: E.left("failure", "error"),
	E.whenHasInformationOtherwise(
		"success",
		(value) => value,
		() => 0,
	),
); // 42
