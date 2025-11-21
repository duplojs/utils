import { DArray, pipe } from "@duplojs/utils";

const input = ["delta", "bravo", "alpha", "charlie"] as const;

const result = DArray.sortString(input, "asc");
// result: ["alpha", "bravo", "charlie", "delta"]

const result2 = pipe(
	input,
	DArray.sortString("dsc"),
);
// result2: ["delta", "charlie", "bravo", "alpha"]
