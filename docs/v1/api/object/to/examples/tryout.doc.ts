import { DNumber, DObject, DString } from "@duplojs/utils";

const input = {
	firstName: "Alice",
	lastName: "Smith",
	age: 30,
};
const majority = 18;

const result = DObject.to(
	input,
	{
		fullName: ({ firstName, lastName }) => DString.concat(firstName, " ", lastName),
		isAdult: ({ age }) => DNumber.greater(age, majority),
	},
);
// result: { fullName: "Alice Smith", isAdult: true }
