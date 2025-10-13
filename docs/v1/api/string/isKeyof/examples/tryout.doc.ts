import { DString } from "@duplojs/utils";

const key = "name" as string;
const user = {
	name: "John",
	age: 30,
};

const result = DString.isKeyof(key, user);
// result: true
