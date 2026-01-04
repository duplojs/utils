import { S, pipe } from "@scripts";

S.trimStart("  DuploJS  "); // "DuploJS  "

pipe(
	"  hello  ",
	S.trimStart,
); // "hello  "

S.trimStart("\ntext\t"); // "text\t"
