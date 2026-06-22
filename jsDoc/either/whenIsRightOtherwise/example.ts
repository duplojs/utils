import { E, pipe } from "@scripts";

const result1 = E.whenIsRightOtherwise(
	E.right("success", 10),
	(value) => value + 1,
	() => 0,
);
// type: number

const result2 = E.whenIsRightOtherwise(
	E.left("failure", "error"),
	(value) => value,
	(value) => value,
);
// type: E.Left<"failure", "error">

const result3 = pipe(
	true
		? E.ok()
		: E.fail(),
	E.whenIsRightOtherwise(
		() => "right" as const,
		() => "otherwise" as const,
	),
);
// type: "right" | "otherwise"
