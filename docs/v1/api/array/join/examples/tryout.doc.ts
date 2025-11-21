import { DArray, pipe } from "@duplojs/utils";

const input = ["Docs", "API", "Array"] as const;

const result = DArray.join(input, " / ");
// result: "Docs / API / Array"

const result2 = pipe(
	input,
	DArray.join(" > "),
);
// result2: "Docs > API > Array"
