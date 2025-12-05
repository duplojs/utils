import { type ExpectType, O } from "@duplojs/utils";

const input = {
	name: "Alice",
	age: 30,
};
const update = {
	age: 31,
	city: "Paris",
};
const result = O.assign(input, update);
// result: { name: "Alice", age: 31, city: "Paris" }

type check = ExpectType<
	typeof result,
	{
		name: string;
		age: number;
		city: string;
	},
	"strict"
>;
