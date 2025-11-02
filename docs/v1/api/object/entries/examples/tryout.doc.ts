import { DObject } from "@duplojs/utils";

const input = {
	name: "Mathieu",
	age: 23,
	city: "Paris",
} as const;
const result = DObject.entries(input);
// result: [["name", "Mathieu"], ["age", 23], ["city", "Paris"]]
