import { O, pipe } from "@scripts";

O.keys(
	{
		name: "Ada",
		age: 36,
	},
); // ["name", "age"]

pipe(
	{
		name: "William",
		role: "client",
	},
	O.keys,
); // ["name", "role"]
