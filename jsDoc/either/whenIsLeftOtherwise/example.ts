import { E, pipe } from "@scripts";

const result1 = E.whenIsLeftOtherwise(
	E.left("failure", "error"),
	(value) => value,
	() => "fallback",
);
// type: string

const result2 = E.whenIsLeftOtherwise(
	E.right("success", 10),
	(value) => value,
	(value) => value,
);
// type: E.Right<"success", 10>

const result3 = pipe(
	true
		? E.ok()
		: E.fail(),
	E.whenIsLeftOtherwise(
		() => "left" as const,
		() => "otherwise" as const,
	),
);
// type: "left" | "otherwise"
