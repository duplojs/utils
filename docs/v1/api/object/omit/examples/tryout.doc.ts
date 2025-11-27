import { O } from "@duplojs/utils";

const input = {
	name: "Alice",
	age: 30,
	city: "Paris",
} as const;
const result = O.omit(input, ["age"]);
// result: { name: "Alice", city: "Paris" }
