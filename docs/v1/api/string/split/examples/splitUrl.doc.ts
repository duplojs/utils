import { DArray, DString, pipe } from "@duplojs/utils";

const input = "https://api.example.com/v1/users/42/posts";
const result = pipe(
	input,
	DString.split("/"),
	DArray.filter((value) => !!value && !DString.startsWith(value, "http")),
	DArray.slice(2),
);
// result: ["api.example.com", "v1", "users", "42", "posts"]
