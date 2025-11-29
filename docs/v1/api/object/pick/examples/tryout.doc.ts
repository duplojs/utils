import { O } from "@duplojs/utils";

const input = {
	name: "William",
	age: 24,
	city: "Paris",
} as const;
const result = O.pick(input, ["name", "city"]);
// result: { name: "William", city: "Paris" }
