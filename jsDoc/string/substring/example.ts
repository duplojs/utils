import { S, pipe } from "@scripts";

S.substring("DuploJS Utils", 7); // " Utils"

S.substring("DuploJS Utils", 0, 6); // "DuploJ"

pipe(
	"DuploJS Utils",
	S.substring(0, 6),
); // "DuploJ"
