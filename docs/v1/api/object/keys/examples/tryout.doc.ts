import { type ExpectType, O } from "@duplojs/utils";

const result = O.keys({
	name: "Alice",
	age: 30,
	city: "Paris",
});

type check = ExpectType<
	typeof result,
	("name" | "age" | "city")[],
	"strict"
>;
