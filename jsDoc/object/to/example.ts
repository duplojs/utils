import { O, pipe } from "@scripts";

O.to(
	{
		name: "Ada",
		age: 36,
	},
	{
		label: (input) => `${input.name}:${input.age}`,
	},
); // { label: "Ada:36" }

pipe(
	{
		name: "Ada",
	},
	O.to({
		upper: (input) => input.name.toUpperCase(),
	}),
); // { upper: "ADA" }

O.to(
	"alpha",
	{
		len: (input) => input.length,
	},
); // { len: 5 }
