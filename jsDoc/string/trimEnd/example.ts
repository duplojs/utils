import { S, pipe } from "@scripts";

S.trimEnd("  DuploJS  "); // "  DuploJS"

pipe(
	"  hello  ",
	S.trimEnd,
); // "  hello"

S.trimEnd("\ntext\t"); // "\ntext"
