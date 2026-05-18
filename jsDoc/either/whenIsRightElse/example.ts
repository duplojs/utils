import { E, pipe } from "@scripts";

const result1 = E.whenIsRightElse(
	E.right("success", 10),
	(value) => value + 1,
	() => 0,
);
// type: number

const result2 = E.whenIsRightElse(
	E.left("failure", "error"),
	(value) => value,
	(value) => value,
);
// type: E.Left<"failure", "error">

const result3 = pipe(
	true
		? E.ok()
		: E.fail(),
	E.whenIsRightElse(
		() => "right" as const,
		() => "else" as const,
	),
);
// type: "right" | "else"
