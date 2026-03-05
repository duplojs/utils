import { S, pipe } from "@scripts";

S.prepend(
	"Utils",
	"Duplo",
	"JS ",
); // "DuploJS Utils"

pipe(
	"world",
	S.prepend("hello "),
); // "hello world"

S.prepend(
	"value",
	"[",
	"] ",
); // "[] value"
