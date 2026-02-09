import { toRegExp } from "@scripts";

const fromString = toRegExp("a.c");
// matches only the literal "a.c"

const fromList = toRegExp([
	"jpg",
	"png",
]);
// matches "jpg" or "png"

const existing = /hello/i;
const sameInstance = toRegExp(existing);
// sameInstance === existing
