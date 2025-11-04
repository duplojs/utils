import { DArray } from "@duplojs/utils";

const input = [10, 20, 30, 40, 50];
const result = DArray.first(input);
// result: 10

const tuple = ["hello", 42, true] as const;
const result2 = DArray.first(tuple);
// result2: "hello"
