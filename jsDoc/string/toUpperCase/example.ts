import { S, pipe } from "@scripts";

S.toUpperCase("duplojs"); // "DUPLOJS"

pipe(
	"hello",
	S.toUpperCase,
); // "HELLO"

S.toUpperCase("zeriix"); // "ZERIIX"
