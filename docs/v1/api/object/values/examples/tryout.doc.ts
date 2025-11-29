import { O } from "@duplojs/utils";

const input = {
	name: "William",
	age: 24,
	city: "Normandie",
} as const;
const result = O.values(input);
// result: ["William", 24, "Normandie"]
