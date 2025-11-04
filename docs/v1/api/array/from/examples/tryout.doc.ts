import { DArray } from "@duplojs/utils";

const set = new Set([1, 2, 3, 4]);
const result1 = DArray.from(set);
// result1: [1, 2, 3, 4]

const input = "hello";
const result2 = DArray.from(input);
// result2: ["h", "e", "l", "l", "o"]

const arrayLike = {
	0: "a",
	1: "b",
	2: "c",
	length: 3,
} as const;
const result3 = DArray.from(arrayLike);
// result3: ["a", "b", "c"]
