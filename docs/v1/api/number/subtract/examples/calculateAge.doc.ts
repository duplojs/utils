import { DNumber, DArray, pipe } from "@duplojs/utils";

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
	DArray.map(
		({ name, birthYear }) => ({
			name,
			age: DNumber.subtract(currentYear, birthYear),
		}),
	),
	DArray.filter(
		({ age }) => DNumber.greaterThan(age, 30),
	),
);

// result: [
//   { name: "Alice", age: 34 },
//   { name: "Bob", age: 39 }
// ]
