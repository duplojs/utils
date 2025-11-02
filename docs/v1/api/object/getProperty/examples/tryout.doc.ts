import { DObject } from "@duplojs/utils";

const input = {
	name: "Alice",
	age: 30,
} as const;
const result = DObject.getProperty(input, "name");
// result: "Alice"
