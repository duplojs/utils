import { C, pipe } from "@scripts";

const name = C.String.createOrThrow("Duplo");

const full = C.concat(name, "JS");
// full: C.String

const curried = pipe(
	name,
	C.concat(" Utils"),
);
// curried: C.String

const mixed = C.concat(
	C.String.createOrThrow("Hello"),
	" ",
	"World",
);
// mixed: C.String
