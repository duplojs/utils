import { equal, pipe, whenElse } from "@scripts";

type Input = "success" | "error";

const input = "success" as Input;

const direct = whenElse(
	input,
	equal("success"),
	() => "ok",
	() => "fail",
);
// result: "ok"

const piped = pipe(
	input,
	whenElse(
		equal("success"),
		() => "ok",
		() => "fail",
	),
);
// result: "ok"
