import { type ExpectType, O } from "@duplojs/utils";

const input = {
	name: "William",
	age: 24,
	city: "Paris",
} as const;
const result = O.pick(input, ["name", "city"]);

type check = ExpectType<
	typeof result,
	{
		readonly name: "William";
		readonly city: "Paris";
	},
	"strict"
>;
