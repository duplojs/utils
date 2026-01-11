import { S, pipe } from "@scripts";

S.slice("DuploJS Utils", 0, 7); // "DuploJS"

S.slice("DuploJS Utils", -5); // "Utils"

pipe(
	"DuploJS Utils",
	S.slice(0, 7),
); // "DuploJS"
