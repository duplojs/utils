import { S, pipe } from "@scripts";

S.search("DuploJS Utils", "JS"); // 5

S.search("DuploJS Utils", "js"); // undefined

pipe(
	"DuploJS Utils",
	S.search(/Utils/),
); // 8
