import { O, pipe } from "@scripts";

O.transformProperties(
	{
		count: 2,
		label: "item",
	},
	{
		count: (value) => value + 1,
		label: (value) => value.toUpperCase(),
	},
); // { count: 3, label: "ITEM" }

pipe(
	{
		name: "Ada",
		age: 36,
	},
	O.transformProperties({
		age: (value) => value + 1,
	}),
); // { name: "Ada", age: 37 }

O.transformProperties(
	{
		active: true,
	},
	{},
); // { active: true }
