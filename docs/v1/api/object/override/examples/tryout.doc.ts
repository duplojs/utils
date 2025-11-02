import { DObject } from "@duplojs/utils";

const input = {
	name: "Alice",
	age: 30,
	city: "Paris",
};
const result = DObject.override(input, {
	age: 31,
});
// result: { name: "Alice", age: 31, city: "Paris" }
