import { N, A, pipe } from "@duplojs/utils";

const currentYear = 2024;
const people = [
	{
		name: "Alice",
		birthYear: 1990,
	},
	{
		name: "Bob",
		birthYear: 1985,
	},
	{
		name: "Charlie",
		birthYear: 2000,
	},
];

const result = pipe(
	people,
	A.map(
		({ name, birthYear }) => ({
			name,
			age: N.subtract(currentYear, birthYear),
		}),
	),
	A.filter(
		({ age }) => N.greaterThan(age, 30),
	),
);

// result: [
//   { name: "Alice", age: 34 },
//   { name: "Bob", age: 39 }
// ]
