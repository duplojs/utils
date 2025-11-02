import { DObject } from "@duplojs/utils";

const input: {
	name: string;
	age?: number;
} = { name: "Alice" };
const result = DObject.hasKeys(input, "age");
// result: false
