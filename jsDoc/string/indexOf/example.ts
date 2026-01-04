import { S, pipe } from "@scripts";

S.indexOf("DuploJS Utils", "JS"); // 5

S.indexOf("DuploJS Utils", "JS", 6); // undefined

pipe(
	"DuploJS Utils",
	S.indexOf("Utils"),
); // 8
