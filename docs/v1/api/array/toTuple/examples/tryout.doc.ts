import { DArray } from "@duplojs/utils";

const input = {
	name: "John",
	age: 30,
	city: "Paris",
} as const;

const result = DArray.toTuple(
	input,
	[
		(value) => value.name,
		(value) => value.age,
		(value) => value.city,
	],
);
// result: ["John", 30, "Paris"]
