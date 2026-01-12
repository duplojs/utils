import { S, pipe, when } from "@scripts";

const userObject = {
	name: "John",
	age: 30,
};

const keyValue = "name" as string;

if (S.isKeyof(keyValue, userObject)) {
	// keyValue is a key of userObject
}

pipe(
	"age",
	when(
		S.isKeyof(userObject),
		(value) => {
			// value is a key of userObject
		},
	),
);

S.isKeyof("title", userObject); // false
