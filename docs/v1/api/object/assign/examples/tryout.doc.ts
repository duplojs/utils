import { O } from "@duplojs/utils";

const input = {
	name: "Alice",
	age: 30,
};
const update = {
	age: 31,
	city: "Paris",
};
const result = O.assign(input, update);
// result: { name: "Alice", age: 31, city: "Paris" }
