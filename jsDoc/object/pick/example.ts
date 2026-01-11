import { O, pipe } from "@scripts";

O.pick(
	{
		name: "Ada",
		age: 36,
	},
	["name"],
); // { name: "Ada" }

O.pick(
	{
		name: "Ada",
		age: 36,
		active: true,
	},
	{
		name: true,
		active: true,
	},
); // { name: "Ada", active: true }

pipe(
	{
		role: "admin",
		level: 3,
	},
	O.pick(["role"]),
); // { role: "admin" }
