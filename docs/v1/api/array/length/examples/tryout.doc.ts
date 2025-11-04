import { DArray } from "@duplojs/utils";

const input = [1, 2, 3, 4, 5];
const result = DArray.length(input);
// result: 5

const tuple = [1, "hello", true] as const;
const result2 = DArray.length(tuple);
// result2: 3
