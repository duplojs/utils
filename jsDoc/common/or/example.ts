import { equal, or, pipe, when } from "@scripts";

type Input = "click" | "hover" | "keydown";

const input = "hover" as Input;

if (or(input, [
	equal("click"),
	equal("hover"),
])) {
	// type: "click" | "hover"
}

const result = pipe(
	input,
	when(
		or([
			equal("click"),
			equal("hover"),
		]),
		() => "handled",
	),
);
// result: "handled"
