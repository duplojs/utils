import { O } from "@duplojs/utils";

const input = {
	name: "Mathieu",
	age: 23,
	city: "Paris",
} as const;
const result = O.entries(input);
// result: [["name", "Mathieu"], ["age", 23], ["city", "Paris"]]
