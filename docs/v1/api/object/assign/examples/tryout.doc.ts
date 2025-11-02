import { DObject } from "@duplojs/utils";

const input = {
	name: "Alice",
	age: 30,
};
const update = {
	age: 31,
	city: "Paris",
};
const result = DObject.assign(input, update);
// result: { name: "Alice", age: 31, city: "Paris" }
