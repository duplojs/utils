import { O } from "@duplojs/utils";

const result = O.override(
	{
		name: "Alice",
		age: 30,
		city: "Paris",
	},
	{
		age: 31,
	},
);
// result: { name: "Alice", age: 31, city: "Paris" }
