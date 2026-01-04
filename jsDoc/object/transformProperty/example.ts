import { O, pipe } from "@scripts";

O.transformProperty(
	{
		count: 2,
	},
	"count",
	(value) => value + 1,
); // { count: 3 }

pipe(
	{
		name: "Ada",
	},
	O.transformProperty("name", (value) => value.toUpperCase()),
); // { name: "ADA" }

O.transformProperty(
	{
		active: true,
	},
	"active",
	(value) => !value,
); // { active: false }
