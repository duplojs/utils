import { type ExpectType, isType } from "@duplojs/utils";

type Input = string | number | string[] | null;

const input = 4 as Input;

if (isType(input, "number")) {
	type check = ExpectType<
		typeof input,
		number,
		"strict"
	>;
}

