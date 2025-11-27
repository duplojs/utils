import { A, pipe } from "@duplojs/utils";

const input = ["Docs", "API", "Array"] as const;

const result = A.join(input, " / ");
// result: "Docs / API / Array"

const result2 = pipe(
	input,
	A.join(" > "),
);
// result2: "Docs > API > Array"
