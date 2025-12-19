import { type ExpectType, O } from "@duplojs/utils";

const result = O.entries({
	name: "Mathieu",
	age: 23,
	city: "Paris",
});

type check = ExpectType<
	typeof result,
	(["name", string] | ["age", number] | ["city", string])[],
	"strict"
>;
