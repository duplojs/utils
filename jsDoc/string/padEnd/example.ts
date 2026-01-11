import { S, pipe } from "@scripts";

S.padEnd("abc", 6, "."); // "abc..."

pipe(
	"42",
	S.padEnd(4, "0"),
); // "4200"

S.padEnd("duplo", 7, "!"); // "duplo!!"
