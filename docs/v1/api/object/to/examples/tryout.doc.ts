import { N, O, S } from "@duplojs/utils";

const input = {
	firstName: "Alice",
	lastName: "Smith",
	age: 30,
};
const majority = 18;

const result = O.to(
	input,
	{
		fullName: ({ firstName, lastName }) => S.concat(firstName, " ", lastName),
		isAdult: ({ age }) => N.greater(age, majority),
	},
);
// result: { fullName: "Alice Smith", isAdult: true }
