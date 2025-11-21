import { DArray, pipe } from "@duplojs/utils";

const input = [42, 7, 19, 7] as const;

const result = DArray.sortNumber(input, "asc");
// result: [7, 7, 19, 42]

const result2 = pipe(
	input,
	DArray.sortNumber("dsc"),
);
// result2: [42, 19, 7, 7]
