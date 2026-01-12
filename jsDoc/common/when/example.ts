import { equal, pipe, when } from "@scripts";

type Input = "success" | "error";

const input = "success" as Input;

const direct = when(
	input,
	equal("success"),
	() => "ok",
);
// result: "ok"

const piped = pipe(
	input,
	when(
		equal("success"),
		() => "ok",
	),
);
// result: "ok"
