import { A, pipe } from "@duplojs/utils";

const input = ["delta", "bravo", "alpha", "charlie"];

const result = A.sortString(input, "asc");
// result: ["alpha", "bravo", "charlie", "delta"]

const result2 = pipe(
	input,
	A.sortString("dsc"),
);
// result2: ["delta", "charlie", "bravo", "alpha"]
