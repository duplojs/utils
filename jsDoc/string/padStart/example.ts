import { S, pipe } from "@scripts";

S.padStart("7", 3, "0"); // "007"

pipe(
	"42",
	S.padStart(4, "0"),
); // "0042"

S.padStart("abc", 5, "."); // "..abc"
