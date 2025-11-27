import { A } from "@duplojs/utils";

const input = [1, 2, 3, 4, 5];
const result = A.length(input);
// result: 5

const tuple = [1, "hello", true] as const;
const result2 = A.length(tuple);
// result2: 3
