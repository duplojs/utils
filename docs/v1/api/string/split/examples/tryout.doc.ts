import { type ExpectType, S } from "@duplojs/utils";

const input = "apple,banana,cherry";
const result = S.split(input, ",");

type check = ExpectType<
	typeof result,
	["apple", "banana", "cherry"],
	"strict"
>;
