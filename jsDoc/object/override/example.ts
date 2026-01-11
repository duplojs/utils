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

pipe(
	{
		count: 1,
	},
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
