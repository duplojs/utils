import { O } from "@duplojs/utils";

const input = {
	name: "Alice",
	age: 30,
	city: "Paris",
} as const;
const result = O.keys(input);
// result: ["name", "age", "city"]
