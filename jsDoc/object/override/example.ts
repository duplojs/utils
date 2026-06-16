import { O, pipe } from "@scripts";

O.override(
	{
		name: "Ada",
		age: 36,
	},
	{
		age: undefined,
	},
); // { name: "Ada", age: 36 }

const input = { count: 1 };
pipe(
	input,
	O.override({
		count: 2,
	}),
); // { count: 2 }

O.override(
	{
		active: true,
	},
	{
		active: false,
	},
); // { active: false }
