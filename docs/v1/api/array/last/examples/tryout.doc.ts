import { A } from "@duplojs/utils";

const input = [10, 20, 30, 40, 50];
const result = A.last(input);
// result: 50

const tuple = ["hello", 42, true] as const;
const result2 = A.last(tuple);
// result2: true
