import { S, pipe } from "@scripts";

S.charAt("DuploJS", 0); // "D"

pipe(
	"Utilities",
	S.charAt(0),
); // "U"

S.charAt("Alpha", 2); // "p"
