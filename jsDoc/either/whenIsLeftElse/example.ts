import { E, pipe } from "@scripts";

const result1 = E.whenIsLeftElse(
	E.left("failure", "error"),
	(value) => value,
	() => "fallback",
);
// type: string

const result2 = E.whenIsLeftElse(
	E.right("success", 10),
	(value) => value,
	(value) => value,
);
// type: E.Right<"success", 10>

const result3 = pipe(
	true
		? E.ok()
		: E.fail(),
	E.whenIsLeftElse(
		() => "left" as const,
		() => "else" as const,
	),
);
// type: "left" | "else"
