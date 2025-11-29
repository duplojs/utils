import { A } from "@duplojs/utils";

const input = [10, 20, 30, 40, 50];
const result = A.first(input);
// result: 10

const tuple = ["hello", 42, true] as const;
const result2 = A.first(tuple);
// result2: "hello"
