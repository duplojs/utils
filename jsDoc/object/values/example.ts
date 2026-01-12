import { O, pipe } from "@scripts";

O.values(
	{
		name: "Ada",
		age: 36,
	},
); // ["Ada", 36]

pipe(
	{
		name: "William",
		role: "client",
	},
	O.values,
); // ["William", "client"]
