import { S, pipe } from "@scripts";

S.concat("Duplo", "JS", " Utils"); // "DuploJS Utils"

pipe(
	"Duplo",
	S.concat("JS"),
); // "DuploJS"

S.concat("Hello", " ", "World"); // "Hello World"
