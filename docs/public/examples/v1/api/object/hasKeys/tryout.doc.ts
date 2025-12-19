import { type ExpectType, O } from "@duplojs/utils";

interface Input {
	name: string;
	age?: number;
}

const input = {
	name: "Alice",
	age: 30,
} as Input;

if (O.hasKeys(input, "age")) {
	type check = ExpectType<
		typeof input,
		{
			age: number;
			name: string;
		},
		"strict"
	>;
}
