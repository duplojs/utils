import { equal, pipe, whenNot } from "@scripts";

type Input = "success" | "error";

const input = "error" as Input;

const direct = whenNot(
	input,
	equal("success"),
	() => "retry",
);
// result: "retry"

const piped = pipe(
	input,
	whenNot(
		equal("success"),
		() => "retry",
	),
);
// result: "retry"
