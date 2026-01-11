import { S, pipe } from "@scripts";

S.uncapitalize("Zeriix"); // "zeriix"

pipe(
	"Hello",
	S.uncapitalize,
); // "hello"

S.uncapitalize("title"); // "title"
