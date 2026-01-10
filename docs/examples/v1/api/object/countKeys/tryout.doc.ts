import { type ExpectType, O } from "@duplojs/utils";

const count = O.countKeys({
	name: "Alice",
	age: 30,
	city: "Paris",
});

type check = ExpectType<
	typeof count,
	number,
	"strict"
>;
