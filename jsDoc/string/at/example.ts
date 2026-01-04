import { S, pipe } from "@scripts";

S.at("DuploJS", -1); // "S"

pipe(
	"TypeScript",
	S.at(-1),
); // "t"

S.at("Alpha", 12); // undefined
