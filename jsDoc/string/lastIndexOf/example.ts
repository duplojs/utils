import { S, pipe } from "@scripts";

S.lastIndexOf("DuploJS Utils", "JS"); // 5

S.lastIndexOf("DuploJS Utils", "JS", 5); // undefined

pipe(
	"DuploJS Utils",
	S.lastIndexOf("Utils"),
); // 8
