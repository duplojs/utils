import { DArray, DString, pipe, not, or, equal } from "@duplojs/utils";

const input = "https://api.example.com/v1/users/42/posts";
const result = pipe(
	input,
	DString.split("/"),
	DArray.filter(
		not(or([equal(""), equal("https:")])),
	),
	DArray.slice(2),
);
// result: ["api.example.com", "v1", "users", "42", "posts"]
