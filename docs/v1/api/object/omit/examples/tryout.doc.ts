import { type ExpectType, O } from "@duplojs/utils";

const input = {
	name: "Alice",
	age: 30,
	city: "Paris",
} as const;
const result = O.omit(input, ["age"]);

type check = ExpectType<
	typeof result,
	{
		readonly name: "Alice";
		readonly city: "Paris";
	},
	"strict"
>;
