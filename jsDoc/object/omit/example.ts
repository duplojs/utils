import { O, pipe } from "@scripts";

O.omit(
	{
		name: "Ada",
		age: 36,
	},
	["age"],
); // { name: "Ada" }

O.omit(
	{
		name: "Ada",
		age: 36,
		active: true,
	},
	{
		active: true,
	},
); // { name: "Ada", age: 36 }

pipe(
	{
		role: "admin",
		level: 3,
	},
	O.omit(["level"]),
); // { role: "admin" }
