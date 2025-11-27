import { O } from "@duplojs/utils";

const input: {
	name: string;
	age?: number;
} = { name: "Alice" };
const result = O.hasKeys(input, "age");
// result: false
