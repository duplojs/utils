import { E, pipe } from "@scripts";

const selector = {
	success: true,
	failure: false,
} as const;

const matched = E.whenIsSelectedOtherwise(
	true
		? E.right("success", 42)
		: E.left("failure", "error"),
	selector,
	(value) => value,
	() => 0,
); // 42

const fallback = E.whenIsSelectedOtherwise(
	false
		? E.right("success", 42)
		: E.left("failure", "error"),
	selector,
	(value) => value,
	(value) => value,
); // E.Left<"failure", "error">

const piped = pipe(
	true
		? E.right("success", 42)
		: E.left("failure", "error"),
	E.whenIsSelectedOtherwise(
		selector,
		(value) => value,
		() => 0,
	),
); // 42
