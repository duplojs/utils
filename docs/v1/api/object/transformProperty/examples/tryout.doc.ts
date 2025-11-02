import { DObject, DString } from "@duplojs/utils";

const user = {
	name: "mathieu",
	age: 23,
} as const;
const result = DObject.transformProperty(user, "name", DString.toUpperCase);
// result: { name: "MATHIEU", age: 30 }
