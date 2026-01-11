import { O, pipe } from "@scripts";

O.assign(
	{
		name: "Alice",
		age: 30,
	},
	{
		age: 31,
		city: "Paris",
	},
); // { name: "Alice", age: 31, city: "Paris" }

pipe(
	{
		name: "William",
		age: 24,
	},
	O.assign({
		age: 25,
		role: "client",
	}),
); // // { name: "William", age: 25, role: "client" }
