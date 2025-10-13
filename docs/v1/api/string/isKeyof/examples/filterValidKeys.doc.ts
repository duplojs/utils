import { DArray, DString, pipe } from "@duplojs/utils";

const input = ["name", "age", "email", "address"];
const user = {
	name: "Alice",
	age: 25,
};
const result = pipe(
	input,
	DArray.filter(DString.isKeyof(user)),
);
// result: ["name", "age"]
