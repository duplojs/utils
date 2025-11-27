import { O } from "@duplojs/utils";

const input = {
	name: "Alice",
	age: 30,
} as const;
const result = O.getProperty(input, "name");
// result: "Alice"
