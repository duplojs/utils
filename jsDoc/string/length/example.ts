import { S, pipe } from "@scripts";

S.length("DuploJS"); // 7

pipe(
	"TypeScript",
	S.length,
); // 10

S.length(""); // 0
