import { DObject } from "@duplojs/utils";

const input = {
	name: "Alice",
	age: 30,
	city: "Paris",
} as const;
const result = DObject.omit(input, ["age"]);
// result: { name: "Alice", city: "Paris" }
