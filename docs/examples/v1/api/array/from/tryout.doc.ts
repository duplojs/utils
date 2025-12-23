import { A, type ExpectType } from "@duplojs/utils";

const set = new Set([1, 2, 3, 4]);
const result1 = A.from(set);
// result1: [1, 2, 3, 4]
type check1 = ExpectType<
	typeof result1,
	number[],
	"strict"
>;

const string = "hello";
const result2 = A.from(string);
// result2: ["h", "e", "l", "l", "o"]
type check2 = ExpectType<
	typeof result2,
	string[],
	"strict"
>;

const arrayLike = {
	0: "a",
	1: "b",
	2: "c",
	length: 3,
} as const;
const result3 = A.from(arrayLike);
// result3: ["a", "b", "c"]
type check3 = ExpectType<
	typeof result3,
	("a" | "b" | "c")[],
	"strict"
>;
