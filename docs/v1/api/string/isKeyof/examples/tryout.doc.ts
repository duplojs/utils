import { type ExpectType, S } from "@duplojs/utils";

const obj = {
	name: "John",
	age: 30,
};

const key = "name" as string;

if (S.isKeyof(key, obj)) {
	type check = ExpectType<
		typeof key,
		"name" | "age",
		"strict"
	>;
}
