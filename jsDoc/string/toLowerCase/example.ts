import { S, pipe } from "@scripts";

S.toLowerCase("ZERIIX"); // "zeriix"

pipe(
	"HELLO",
	S.toLowerCase,
); // "hello"

S.toLowerCase("DUPlO"); // "duplo"
