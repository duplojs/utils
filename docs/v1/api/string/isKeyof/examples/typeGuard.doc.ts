import { DString } from "@duplojs/utils";

const key = "name";
const user = {
	name: "John",
	age: 30,
};

if (DString.isKeyof(key, user)) {
	const value = user[key];
	// value: string
} else {
	console.log(key);
	// key is not a keyof user (key = never)
}
