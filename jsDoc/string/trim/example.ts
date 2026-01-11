import { S, pipe } from "@scripts";

S.trim("  DuploJS  "); // "DuploJS"

pipe(
	"  hello  ",
	S.trim,
); // "hello"

S.trim("\ntext\t"); // "text"
