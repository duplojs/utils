import { DObject } from "@duplojs/utils";

const input = {
	name: "William",
	age: 24,
	city: "Normandie",
} as const;
const result = DObject.values(input);
// result: ["William", 24, "Normandie"]
