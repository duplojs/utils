import { S, pipe } from "@scripts";

S.capitalize("zeriix"); // "Zeriix"

pipe(
	"alpha",
	S.capitalize,
); // "Alpha"

S.capitalize("DUPLO"); // "DUPLO"
