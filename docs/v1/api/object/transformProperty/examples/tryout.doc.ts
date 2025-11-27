import { O, DString } from "@duplojs/utils";

const user = {
	name: "mathieu",
	age: 23,
} as const;
const result = O.transformProperty(user, "name", DString.toUpperCase);
// result: { name: "MATHIEU", age: 30 }
