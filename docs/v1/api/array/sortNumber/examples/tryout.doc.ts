import { A, pipe } from "@duplojs/utils";

const input = [42, 7, 19, 7];

const result = A.sortNumber(input, "asc");
// result: [7, 7, 19, 42]

const result2 = pipe(
	input,
	A.sortNumber("dsc"),
);
// result2: [42, 19, 7, 7]
