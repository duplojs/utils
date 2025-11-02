import { DGenerator, DString, pipe } from "@duplojs/utils";

const input = [
	{
		firstName: "john",
		lastName: "doe",
	},
	{
		firstName: "jane",
		lastName: "smith",
	},
	{
		firstName: "bob",
		lastName: "johnson",
	},
];

const result = pipe(
	input,
	DGenerator.map((user) => pipe(
		user.firstName,
		DString.concat(" "),
		DString.concat(user.lastName),
	)),
	DGenerator.reduce(
		DGenerator.reduceFrom<string[]>([]),
		({ element, lastValue, next }) => next([...lastValue, element]),
	),
);
// result: ["john doe", "jane smith", "bob johnson"]
